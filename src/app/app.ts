import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { SupabaseService } from './core/services/supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FinExpense');
  showNavbar: boolean = false;
  isDarkMode = signal<boolean>(false);

  constructor(private router: Router, private supabase: SupabaseService) {
    this.initTheme();
    this.checkInitialSession();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      // Hide navbar on onboarding and auth pages
      this.showNavbar = !['/', '/onboarding-baseline', '/auth'].includes(url);
    });
  }

  private async checkInitialSession() {
    try {
      const session = await this.supabase.getSession();

      if (!session) {
        if (this.router.url !== '/auth' && !window.location.pathname.includes('/auth')) {
          this.router.navigate(['/auth']);
        }
        return;
      }

      const wallets = await this.supabase.client.from('wallets').select('id').limit(1);
      const hasWallet = wallets.data && wallets.data.length > 0;
      
      const currentUrl = this.router.url;
      if (hasWallet) {
        const walletId = wallets.data![0].id;
        const now = new Date();
        const { data: budget } = await this.supabase.client
          .from('monthly_budgets')
          .select('id')
          .eq('wallet_id', walletId)
          .eq('month', now.getMonth() + 1)
          .eq('year', now.getFullYear())
          .maybeSingle();

        if (budget) {
          localStorage.setItem('active_budget_id', budget.id);
          localStorage.setItem('active_wallet_id', walletId);
          if (['/', '/auth', '/onboarding-baseline'].includes(currentUrl) || currentUrl === '') {
            this.router.navigate(['/dashboard']);
          }
        } else {
          if (currentUrl !== '/onboarding-baseline') {
            this.router.navigate(['/onboarding-baseline']);
          }
        }
      } else {
        if (!['/', '/onboarding-baseline', '/auth'].includes(currentUrl)) {
          this.router.navigate(['/']);
        }
      }
    } catch (error) {
      console.error('App: Error in checkInitialSession', error);
    }
  }

  async logout() {
    await this.supabase.signOut();
    // Only clear finance-related local storage, keep others (like supabase session if any)
    const keysToClear = [
      'bank_balance', 'monthly_limit', 'bank_name', 'account_last_four',
      'active_wallet_id', 'active_budget_id', 'last_month_configured',
      'temp_bank_name', 'temp_account_last_four'
    ];
    keysToClear.forEach(key => localStorage.removeItem(key));
    this.router.navigate(['/auth']);
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.isDarkMode.set(true);
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode.set(false);
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
