import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../core/services/transaction.service';
import { CATEGORIES } from '../../models/category.data';
import { ToastrService } from 'ngx-toastr';
import { Transaction } from '../../models/finance.model';

@Component({
  selector: 'app-add-transaction-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div class="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div class="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <h2 class="font-headline-sm">{{ transaction ? 'Edit' : 'Add' }} Transaction</h2>
          <button (click)="close.emit()" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <form (ngSubmit)="onSubmit()" class="p-6 flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-label-md text-on-surface-variant">Amount (₹)</label>
            <input 
              type="number" 
              [(ngModel)]="amount" 
              name="amount" 
              required
              placeholder="0.00"
              class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-display-sm focus:outline-primary outline-offset-0 transition-all"
            >
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-label-md text-on-surface-variant">Note / Description</label>
            <input 
              type="text" 
              [(ngModel)]="note" 
              name="note" 
              placeholder="What was this for?"
              class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:outline-primary outline-offset-0 transition-all"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="font-label-md text-on-surface-variant">Category</label>
              <select 
                [(ngModel)]="category" 
                name="category" 
                (change)="onCategoryChange()"
                class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:outline-primary outline-offset-0 transition-all"
              >
                <option *ngFor="let cat of categoryList" [value]="cat">{{cat}}</option>
              </select>
            </div>
            <div class="flex flex-col gap-1">
              <label class="font-label-md text-on-surface-variant">Sub-category</label>
              <select 
                [(ngModel)]="subCategory" 
                name="subCategory" 
                class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:outline-primary outline-offset-0 transition-all"
              >
                <option *ngFor="let sub of subCategoryList" [value]="sub">{{sub}}</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-label-md text-on-surface-variant">Date</label>
            <input 
              type="date" 
              [(ngModel)]="date" 
              name="date" 
              class="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md focus:outline-primary outline-offset-0 transition-all"
            >
          </div>

          <div class="mt-4 flex gap-3">
            <button 
              type="button" 
              (click)="close.emit()"
              class="flex-1 px-4 py-3 rounded-xl border border-outline-variant font-label-lg hover:bg-surface-container-low transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              [disabled]="loading || !amount"
              class="flex-1 px-4 py-3 rounded-xl bg-primary text-on-primary font-label-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : 'Save Transaction' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AddTransactionModal implements OnInit {
  @Input('transaction') transaction: Transaction | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  amount: number | null = null;
  note: string = '';
  category: string = 'Food & Dining';
  subCategory: string = 'Groceries';
  date: string = new Date().toISOString().split('T')[0];
  loading = false;

  categoryList = Object.keys(CATEGORIES);
  subCategoryList: string[] = CATEGORIES['Food & Dining' as keyof typeof CATEGORIES];

  constructor(
    private transactionService: TransactionService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (this.transaction) {
      this.amount = this.transaction.amount;
      this.note = this.transaction.note;
      this.category = this.transaction.main_category;
      this.subCategoryList = CATEGORIES[this.category as keyof typeof CATEGORIES] || [];
      this.subCategory = this.transaction.sub_category;
      this.date = new Date(this.transaction.transaction_date).toISOString().split('T')[0];
    }
  }

  onCategoryChange() {
    this.subCategoryList = CATEGORIES[this.category as keyof typeof CATEGORIES] || [];
    this.subCategory = this.subCategoryList[0] || '';
  }

  async onSubmit() {
    if (!this.amount) return;

    this.loading = true;
    try {
      const budgetId = localStorage.getItem('active_budget_id');
      if (!budgetId && !this.transaction) {
        throw new Error('No active budget found. Please set your baseline first.');
      }

      const transactionData: Partial<Transaction> = {
        amount: this.amount,
        note: this.note,
        main_category: this.category,
        sub_category: this.subCategory,
        transaction_date: this.date,
        type: 'expense',
        budget_id: this.transaction?.budget_id || budgetId!
      };

      if (this.transaction) {
        await this.transactionService.updateTransaction(this.transaction.id, transactionData);
        this.toastr.success('Transaction updated successfully!');
      } else {
        await this.transactionService.addTransaction(transactionData);
        this.toastr.success('Transaction added successfully!');
      }

      this.saved.emit();
      this.close.emit();
    } catch (error: any) {
      console.error(error);
      this.toastr.error('Failed to save transaction: ' + error.message);
    } finally {
      this.loading = false;
    }
  }
}
