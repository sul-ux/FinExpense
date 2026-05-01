import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../core/services/transaction.service';
import { ExportService } from '../../core/services/export.service';
import { CATEGORIES } from '../../shared/models/category.data';
import { Transaction } from '../../shared/models/finance.model';

interface MonthlyReportItem {
  id: string;
  monthName: string;
  year: number;
  totalBalance: number;
  totalExpense: number;
  budgetLimit: number;
  expensePercentage: number;
  remainingBalance: number;
}

@Component({
  selector: 'app-monthely-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './monthely-report.html',
  styles: []
})
export class MonthelyReport implements OnInit {
  reports: MonthlyReportItem[] = [];
  allTransactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  loading: boolean = true;
  isFilterVisible: boolean = false;
  viewMode: 'summaries' | 'all' | 'detail' = 'summaries';
  selectedReport: MonthlyReportItem | null = null;

  // Filters
  filters = {
    startDate: '',
    endDate: '',
    category: '',
    minAmount: null as number | null,
    maxAmount: null as number | null,
    search: ''
  };

  categories = Object.keys(CATEGORIES);

  private monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(
    private transactionService: TransactionService, 
    private exportService: ExportService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.loading = true;
    try {
      await this.loadReports();
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async loadReports() {
    const budgetId = localStorage.getItem('active_budget_id');
    if (!budgetId) {
      this.router.navigate(['/']);
      return;
    }

    try {
      const currentBudget = await this.transactionService.getBudgetWithWallet(budgetId);
      if (!currentBudget || !currentBudget.wallet_id) return;

      const walletId = currentBudget.wallet_id;

      // Fetch all budgets for this wallet
      const { data: budgets, error } = await (this.transactionService as any).supabase.client
        .from('monthly_budgets')
        .select('*')
        .eq('wallet_id', walletId)
        .order('year', { ascending: false })
        .order('month', { ascending: false });

      if (error) throw error;

      const enrichedReports: MonthlyReportItem[] = [];
      const collectedTransactions: Transaction[] = [];

      for (const b of budgets || []) {
        const transactions = await this.transactionService.getTransactions(b.id);
        collectedTransactions.push(...(transactions || []));
        const totalSpent = (transactions || []).reduce((acc: number, t: Transaction) => acc + (t.amount || 0), 0);
        
        enrichedReports.push({
          id: b.id,
          monthName: this.monthNames[b.month - 1],
          year: b.year,
          totalBalance: b.starting_balance - totalSpent,
          totalExpense: totalSpent,
          budgetLimit: b.monthly_limit,
          expensePercentage: b.monthly_limit > 0 ? (totalSpent / b.monthly_limit) * 100 : 0,
          remainingBalance: b.monthly_limit - totalSpent
        });
      }

      this.reports = enrichedReports;
      this.allTransactions = collectedTransactions;
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  }

  showAllTransactions() {
    this.viewMode = 'all';
    this.isFilterVisible = true;
    this.applyFilters();
  }

  showMonthDetail(report: MonthlyReportItem) {
    this.viewMode = 'detail';
    this.selectedReport = report;
    this.isFilterVisible = true;
    this.applyFilters();
  }

  backToSummaries() {
    this.viewMode = 'summaries';
    this.selectedReport = null;
    this.isFilterVisible = false;
    this.clearFilters();
  }

  applyFilters() {
    let baseTransactions = this.allTransactions;
    
    if (this.viewMode === 'detail' && this.selectedReport) {
      baseTransactions = this.allTransactions.filter(t => t.budget_id === this.selectedReport!.id);
    }

    this.filteredTransactions = baseTransactions.filter(t => {
      const date = new Date(t.transaction_date).getTime();
      const start = this.filters.startDate ? new Date(this.filters.startDate).getTime() : null;
      const end = this.filters.endDate ? new Date(this.filters.endDate + 'T23:59:59').getTime() : null;

      if (start && date < start) return false;
      if (end && date > end) return false;
      if (this.filters.category && t.main_category !== this.filters.category) return false;
      if (this.filters.minAmount !== null && t.amount < this.filters.minAmount) return false;
      if (this.filters.maxAmount !== null && t.amount > this.filters.maxAmount) return false;
      if (this.filters.search && !t.note?.toLowerCase().includes(this.filters.search.toLowerCase())) return false;

      return true;
    });
    this.cdr.detectChanges();
  }

  clearFilters() {
    this.filters = {
      startDate: '',
      endDate: '',
      category: '',
      minAmount: null,
      maxAmount: null,
      search: ''
    };
    this.applyFilters();
  }

  toggleFilters() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  async exportData() {
    if (this.viewMode === 'summaries') {
      // Export summaries
      const summaryData = this.reports.map(r => ({
        'Period': `${r.monthName} ${r.year}`,
        'Total Expense': r.totalExpense,
        'Budget Limit': r.budgetLimit,
        'Remaining': r.remainingBalance
      }));
      // Use Excel export for summaries as it's more structured
      await this.exportService.exportToExcel(this.allTransactions, 'Financial_Summaries');
    } else {
      await this.exportPdf();
    }
  }

  async exportPdf() {
    const title = this.viewMode === 'all' ? 'All Transactions Report' : `${this.selectedReport?.monthName} ${this.selectedReport?.year} Detailed Report`;
    await this.exportService.exportToPdf(this.filteredTransactions, title);
  }

  async exportExcel() {
    const title = this.viewMode === 'all' ? 'All_Transactions' : `${this.selectedReport?.monthName}_${this.selectedReport?.year}_Report`;
    await this.exportService.exportToExcel(this.filteredTransactions, title);
  }

  absRemaining(val: number): number {
    return Math.abs(val);
  }

  get totalFilteredAmount(): number {
    return this.filteredTransactions.reduce((acc, t) => acc + (t.amount || 0), 0);
  }

  get groupedTransactions(): { title: string, transactions: Transaction[], total: number }[] {
    const groups: { [key: string]: { title: string, transactions: Transaction[], total: number } } = {};
    
    this.filteredTransactions.forEach(t => {
      const date = new Date(t.transaction_date);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      const title = `${this.monthNames[date.getMonth()]} ${date.getFullYear()}`;
      
      if (!groups[key]) {
        groups[key] = { title, transactions: [], total: 0 };
      }
      
      groups[key].transactions.push(t);
      groups[key].total += (t.amount || 0);
    });

    // Sort groups by date descending
    return Object.keys(groups)
      .sort((a, b) => b.localeCompare(a))
      .map(key => groups[key]);
  }
}
