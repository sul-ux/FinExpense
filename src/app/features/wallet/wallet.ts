import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';

interface WalletCard {
  id: string;
  bankName: string;
  accountLastFour: string;
  balance: number;
  monthlyLimit: number;
  totalSpent: number;
  usagePercentage: number;
  statusLabel: string;
  isWarning: boolean;
  isCritical: boolean;
}

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wallet.html',
  styles: []
})
export class Wallet implements OnInit {
  wallets: WalletCard[] = [];
  loading: boolean = true;

  constructor(
    private transactionService: TransactionService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.loading = true;
    try {
      await this.loadWallets();
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  async loadWallets() {
    try {
      // 1. Fetch all wallets
      const { data: walletData, error: wError } = await (this.transactionService as any).supabase.client
        .from('wallets')
        .select('*');

      if (wError) throw wError;

      const enrichedWallets: WalletCard[] = [];

      for (const w of walletData || []) {
        // 2. Get current budget for this wallet (most recent)
        const { data: budgetData } = await (this.transactionService as any).supabase.client
          .from('monthly_budgets')
          .select('*')
          .eq('wallet_id', w.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        let totalSpent = 0;
        let limit = budgetData?.monthly_limit || 0;
        let startingBalance = budgetData?.starting_balance || 0;

        if (budgetData) {
          const transactions = await this.transactionService.getTransactions(budgetData.id);
          totalSpent = (transactions || []).reduce((acc, t) => acc + (t.amount || 0), 0);
        }

        const usage = limit > 0 ? (totalSpent / limit) * 100 : 0;

        enrichedWallets.push({
          id: w.id,
          bankName: w.bank_name,
          accountLastFour: w.account_last_four,
          balance: startingBalance - totalSpent,
          monthlyLimit: limit,
          totalSpent: totalSpent,
          usagePercentage: usage,
          statusLabel: usage >= 80 ? 'CRITICAL' : (usage >= 50 ? 'WARNING' : 'SAFE'),
          isWarning: usage >= 50 && usage < 80,
          isCritical: usage >= 80
        });
      }

      this.wallets = enrichedWallets;
    } catch (error) {
      console.error('Error loading wallets:', error);
    }
  }

  switchWallet(walletId: string) {
    // This could set the 'active_budget_id' in localStorage and navigate home
    // For now, let's find the budget for this wallet and set it
    this.loading = true;
    (async () => {
      const { data: budget } = await (this.transactionService as any).supabase.client
        .from('monthly_budgets')
        .select('id')
        .eq('wallet_id', walletId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (budget) {
        localStorage.setItem('active_budget_id', budget.id);
        this.router.navigate(['/dashboard']);
      } else {
        this.loading = false;
        this.cdr.detectChanges();
        alert('No budget found for this wallet.');
      }
    })();
  }
}
