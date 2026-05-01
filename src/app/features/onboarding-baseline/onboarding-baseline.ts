import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TransactionService } from '../../core/services/transaction.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-onboarding-baseline',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './onboarding-baseline.html',
  styleUrl: './onboarding-baseline.scss'
})
export class OnboardingBaseline {
  bankBalanceDisplay: string = '';
  monthlyLimitDisplay: string = '';
  isNewMonth: boolean = false;
  currentMonthName: string = '';

  constructor(
    private router: Router, 
    private transactionService: TransactionService, 
    private toastr: ToastrService
  ) { 
    const now = new Date();
    this.currentMonthName = now.toLocaleString('default', { month: 'long' });
    this.checkIfNewMonth();
  }

  private async checkIfNewMonth() {
    const walletId = localStorage.getItem('active_wallet_id');
    if (walletId) {
      this.isNewMonth = true; // If we have a wallet but we are on this page, it's likely a new month redirect
    }
  }

  formatInput(event: any, field: 'balance' | 'limit') {
    let value = event.target.value.replace(/,/g, '');
    if (isNaN(value) || value === '') {
      if (field === 'balance') this.bankBalanceDisplay = '';
      else this.monthlyLimitDisplay = '';
      return;
    }

    const formatted = new Intl.NumberFormat('en-IN').format(Number(value));
    if (field === 'balance') this.bankBalanceDisplay = formatted;
    else this.monthlyLimitDisplay = formatted;
  }

  async onGetStarted() {
    const rawBalanceInput = this.bankBalanceDisplay.replace(/,/g, '');
    const rawLimitInput = this.monthlyLimitDisplay.replace(/,/g, '');

    if (!rawBalanceInput || Number(rawBalanceInput) === 0) {
      this.toastr.error('Total Bank Balance is mandatory!', 'Required Field');
      return;
    }

    if (!rawLimitInput || Number(rawLimitInput) === 0) {
      this.toastr.error('Monthly Spending Limit is mandatory!', 'Required Field');
      return;
    }

    const rawBalance = Number(rawBalanceInput);
    const rawLimit = Number(rawLimitInput);

    try {
      // 1. Get or Create Wallet
      let walletId = localStorage.getItem('active_wallet_id');
      const tempBank = localStorage.getItem('temp_bank_name');
      const tempLastFour = localStorage.getItem('temp_account_last_four');
      
      let bankName = '';
      let accountLastFour = '';

      if (tempBank) {
        // Explicitly adding a new account from OnboardingAccount
        const newWallet = await this.transactionService.createWallet({
          bank_name: tempBank,
          account_last_four: tempLastFour || '0000'
        });
        walletId = newWallet.id;
        bankName = newWallet.bank_name;
        accountLastFour = newWallet.account_last_four;
        
        // Clear temp storage
        localStorage.removeItem('temp_bank_name');
        localStorage.removeItem('temp_account_last_four');
      } else if (walletId) {
        // Using existing active wallet (e.g. new month setup)
        bankName = localStorage.getItem('bank_name') || 'Main Checking';
        accountLastFour = localStorage.getItem('account_last_four') || '0000';
      } else {
        // Fallback: Check if user already has wallets in DB
        const wallets = await this.transactionService.getWallets();
        if (wallets && wallets.length > 0) {
          walletId = wallets[0].id;
          bankName = wallets[0].bank_name;
          accountLastFour = wallets[0].account_last_four;
        } else {
          // Create a default one if absolutely nothing exists
          const newWallet = await this.transactionService.createWallet({
            bank_name: 'Main Checking',
            account_last_four: '0000'
          });
          walletId = newWallet.id;
          bankName = newWallet.bank_name;
          accountLastFour = newWallet.account_last_four;
        }
      }

      // 2. Create Monthly Budget in Supabase
      const now = new Date();
      const budget = await this.transactionService.createBudget({
        wallet_id: walletId,
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        starting_balance: rawBalance,
        monthly_limit: rawLimit
      });

      // 3. Store local state
      localStorage.setItem('bank_balance', rawBalance.toString());
      localStorage.setItem('monthly_limit', rawLimit.toString());
      localStorage.setItem('bank_name', bankName);
      localStorage.setItem('account_last_four', accountLastFour);
      localStorage.setItem('active_wallet_id', walletId!);
      localStorage.setItem('active_budget_id', budget.id);
      
      const currentMY = new Date().toISOString().slice(0, 7);
      localStorage.setItem('last_month_configured', currentMY);

      this.toastr.success(`Setup complete for ${now.toLocaleString('default', { month: 'long' })}!`);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Monthly Setup error:', error);
      this.toastr.error('Setup failed: ' + error.message);
    }
  }
}
