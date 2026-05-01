import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';
import { Transaction } from '../../shared/models/finance.model';
import { AddTransactionModal } from '../../shared/components/add-transaction-modal/add-transaction-modal';
import { ToastrService } from 'ngx-toastr';
import { ExportService } from '../../core/services/export.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, RouterLink, AddTransactionModal],
  templateUrl: './transactions.html',
  styles: []
})
export class Transactions implements OnInit {
  transactions: Transaction[] = [];
  loading: boolean = true;
  totalAmount: number = 0;

  isEditModalOpen: boolean = false;
  isExportMenuOpen: boolean = false;
  selectedTransaction: Transaction | null = null;

  get groupedTransactions() {
    const groups: { [key: string]: { date: string, total: number, transactions: Transaction[] } } = {};
    
    this.transactions.forEach(t => {
      // Normalize date to YYYY-MM-DD for grouping
      const dateKey = new Date(t.transaction_date).toISOString().split('T')[0];
      if (!groups[dateKey]) {
        groups[dateKey] = {
          date: t.transaction_date, // Keep full date for the pipe
          total: 0,
          transactions: []
        };
      }
      groups[dateKey].transactions.push(t);
      groups[dateKey].total += t.amount || 0;
    });

    // Convert to array and sort by date descending
    return Object.values(groups).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  constructor(
    private transactionService: TransactionService, 
    private exportService: ExportService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  exportPdf() {
    if (this.transactions.length === 0) {
      this.toastr.warning('No transactions to export');
      return;
    }
    this.exportService.exportToPdf(this.transactions, 'Monthly Transactions History');
    this.isExportMenuOpen = false;
  }

  exportExcel() {
    if (this.transactions.length === 0) {
      this.toastr.warning('No transactions to export');
      return;
    }
    this.exportService.exportToExcel(this.transactions, 'Monthly_Transactions');
    this.isExportMenuOpen = false;
  }

  async ngOnInit() {
    this.loading = true;
    try {
      await this.loadTransactions();
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async loadTransactions() {
    const budgetId = localStorage.getItem('active_budget_id');
    
    if (!budgetId) {
      this.router.navigate(['/']);
      return;
    }

    try {
      this.transactions = await this.transactionService.getTransactions(budgetId);
      this.totalAmount = this.transactions.reduce((acc, t) => acc + (t.amount || 0), 0);
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }

  async deleteTransaction(id: string) {
    if (confirm('Are you sure you want to delete this transaction?')) {
      try {
        await this.transactionService.deleteTransaction(id);
        this.toastr.success('Transaction deleted successfully!');
        await this.loadTransactions();
        this.cdr.detectChanges();
      } catch (error: any) {
        this.toastr.error('Failed to delete: ' + error.message);
      }
    }
  }

  openEditModal(transaction: Transaction) {
    this.selectedTransaction = transaction;
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedTransaction = null;
  }

  async onTransactionUpdated() {
    await this.loadTransactions();
    this.cdr.detectChanges();
  }

  getIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Food & Dining': 'restaurant',
      'Shopping': 'shopping_bag',
      'Transportation': 'directions_car',
      'Entertainment': 'movie',
      'Bills & Utilities': 'receipt_long',
      'Health': 'medical_services',
      'Travel': 'flight',
      'Education': 'school',
      'Groceries': 'local_grocery_store',
      'Personal Care': 'face',
      'Communication & Entertainment': 'smart_display'
    };
    return icons[category] || 'payments';
  }
}
