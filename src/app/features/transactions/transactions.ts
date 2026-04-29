import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';
import { Transaction } from '../../shared/models/finance.model';
import { AddTransactionModal } from '../../shared/components/add-transaction-modal/add-transaction-modal';
import { ToastrService } from 'ngx-toastr';

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
  selectedTransaction: Transaction | null = null;

  constructor(
    private transactionService: TransactionService, 
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

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
