import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';

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
  imports: [CommonModule, RouterLink],
  templateUrl: './monthely-report.html',
  styles: []
})
export class MonthelyReport implements OnInit {
  reports: MonthlyReportItem[] = [];
  loading: boolean = true;

  private monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(
    private transactionService: TransactionService, 
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
      // 1. Get current budget to find the wallet_id
      const currentBudget = await this.transactionService.getBudgetWithWallet(budgetId);
      if (!currentBudget || !currentBudget.wallet_id) return;

      const walletId = currentBudget.wallet_id;

      // 2. Fetch all budgets for this wallet
      const { data: budgets, error } = await (this.transactionService as any).supabase.client
        .from('monthly_budgets')
        .select('*')
        .eq('wallet_id', walletId)
        .order('year', { ascending: false })
        .order('month', { ascending: false });

      if (error) throw error;

      // 3. For each budget, calculate total spent
      const enrichedReports: MonthlyReportItem[] = [];
      for (const b of budgets || []) {
        const transactions = await this.transactionService.getTransactions(b.id);
        const totalSpent = (transactions || []).reduce((acc, t) => acc + (t.amount || 0), 0);
        
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
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  }

  absRemaining(val: number): number {
    return Math.abs(val);
  }
}
