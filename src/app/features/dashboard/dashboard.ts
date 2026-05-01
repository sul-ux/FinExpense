import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';
import { AddTransactionModal } from '../../shared/components/add-transaction-modal/add-transaction-modal';
import { CATEGORY_ICONS } from '../../shared/models/category.data';
import { Transaction } from '../../shared/models/finance.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,  RouterLink, AddTransactionModal],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  bankName: string = '';
  accountLastFour: string = '';
  totalBalance: number = 0;
  totalSpent: number = 0;
  monthlyLimit: number = 0;
  usagePercentage: number = 0;
  statusLabel: string = 'Safe';
  isWarning: boolean = false;
  isCritical: boolean = false;
  isModalOpen: boolean = false;
  loading: boolean = true;
  
  recentTransactions: Transaction[] = [];
  categorySpends: { name: string, spent: number, limit: number, percentage: number, colorClass: string }[] = [];

  constructor(
    private transactionService: TransactionService, 
    private router: Router,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  async ngOnInit() {
    // Force a clean start
    this.loading = true;
    try {
      await this.loadState();
    } finally {
      this.loading = false;
      this.cdr.detectChanges(); // Manually trigger to prevent hang
    }
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  async onTransactionSaved() {
    this.isModalOpen = false; // Close modal immediately
    
    // Add a tiny delay to ensure Supabase write is complete before re-fetching
    this.loading = true;
    this.cdr.detectChanges();
    
    setTimeout(async () => {
      await this.zone.run(async () => {
        await this.loadState();
        this.loading = false;
        this.cdr.detectChanges();
      });
    }, 500);
  }

  private async loadState() {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    
    let walletId = localStorage.getItem('active_wallet_id');
    let budgetId = null;

    // 1. Try to find if there's a budget for the current month
    if (walletId) {
      try {
        const budget = await this.transactionService.getBudget(walletId, currentMonth, currentYear);
        if (budget) {
          budgetId = budget.id;
          localStorage.setItem('active_budget_id', budgetId);
        }
      } catch (err) {
        console.warn('Dashboard: Failed to fetch current month budget', err);
      }
    }

    // 2. Fallback to stored budgetId if no current month found
    if (!budgetId) {
      budgetId = localStorage.getItem('active_budget_id');
    }
    
    // 3. Complete fallback: fetch wallet and budget from scratch
    if (!budgetId) {
      try {
        const wallets = await this.transactionService.getWallets();
        if (wallets && wallets.length > 0) {
          const wallet = wallets[0];
          const budget = await this.transactionService.getBudget(wallet.id, currentMonth, currentYear);
          
          if (budget) {
            budgetId = budget.id;
            localStorage.setItem('active_budget_id', budget.id);
            localStorage.setItem('active_wallet_id', wallet.id);
            localStorage.setItem('bank_name', wallet.bank_name);
            localStorage.setItem('account_last_four', wallet.account_last_four);
          }
        }
      } catch (err) {
        console.error('Dashboard: Full fallback error', err);
      }
    }
    
    if (!budgetId) {
      this.router.navigate(['/']);
      return;
    }

    try {
      // 1. Fetch Budget and Wallet using the new helper
      const budget = await this.transactionService.getBudgetWithWallet(budgetId);
      
      if (!budget) {
        console.warn('Dashboard: Budget not found in DB, redirecting...');
        this.router.navigate(['/']);
        return;
      }

      this.bankName = budget.wallet?.bank_name || localStorage.getItem('bank_name') || 'My Bank';
      this.accountLastFour = budget.wallet?.account_last_four || localStorage.getItem('account_last_four') || '0000';
      this.monthlyLimit = budget.monthly_limit;
      const startingBalance = budget.starting_balance;

      // Sync back to localStorage for other components
      if (budget.wallet) {
        localStorage.setItem('active_wallet_id', budget.wallet.id);
        localStorage.setItem('bank_name', budget.wallet.bank_name);
        localStorage.setItem('account_last_four', budget.wallet.account_last_four);
      }
      localStorage.setItem('active_budget_id', budgetId);

      // 2. Fetch Transactions
      this.recentTransactions = await this.transactionService.getRecentTransactions(5, budgetId);
      const allTransactions = await this.transactionService.getTransactions(budgetId);
      
      this.totalSpent = (allTransactions || []).reduce((acc, t) => acc + (t.amount || 0), 0);
      this.totalBalance = startingBalance - this.totalSpent;
      
      // 3. Category Spends
      const spendsMap = new Map<string, number>();
      (allTransactions || []).forEach(t => {
        const cat = t.main_category || 'Other';
        spendsMap.set(cat, (spendsMap.get(cat) || 0) + (t.amount || 0));
      });

      this.categorySpends = Array.from(spendsMap.entries()).map(([name, spent]) => {
        const limit = 5000;
        const percentage = Math.min((spent / limit) * 100, 100);
        return { 
          name, spent, limit, percentage, 
          colorClass: percentage > 80 ? 'bg-error' : (percentage > 50 ? 'bg-warning' : 'bg-primary')
        };
      });

      this.statusLabel = this.totalSpent >= this.monthlyLimit * 0.8 ? 'Critical' : (this.totalSpent >= this.monthlyLimit * 0.5 ? 'Warning' : 'Safe');

    } catch (error) {
      console.error('Dashboard Load Error:', error);
      // Final fallback to localStorage
      this.bankName = localStorage.getItem('bank_name') || 'Main Bank';
      this.totalBalance = Number(localStorage.getItem('bank_balance')) || 0;
      this.monthlyLimit = Number(localStorage.getItem('monthly_limit')) || 0;
      this.accountLastFour = localStorage.getItem('account_last_four') || '0000';
    }
    
    this.usagePercentage = this.monthlyLimit > 0 ? Math.min((this.totalSpent / this.monthlyLimit) * 100, 100) : 0;
    this.isWarning = this.usagePercentage >= 50 && this.usagePercentage < 80;
    this.isCritical = this.usagePercentage >= 80;
  }

  getIcon(category: string): string {
    return CATEGORY_ICONS[category] || 'payments';
  }

  get remainingBalance(): number {
    return this.monthlyLimit - this.totalSpent;
  }
}
