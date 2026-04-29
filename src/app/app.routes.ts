import { Routes } from '@angular/router';
import { OnboardingAccount } from './features/onboarding-account/onboarding-account';
import { OnboardingBaseline } from './features/onboarding-baseline/onboarding-baseline';
import { Dashboard } from './features/dashboard/dashboard';
import { Wallet } from './features/wallet/wallet';
import { MonthelyReport } from './features/monthely-report/monthely-report';
import { Transactions } from './features/transactions/transactions';
import { Auth } from './features/auth/auth';

export const routes: Routes = [
  { path: '', component: OnboardingAccount },
  { path: 'auth', component: Auth },
  { path: 'onboarding-baseline', component: OnboardingBaseline },
  { path: 'dashboard', component: Dashboard },
  { path: 'reports', component: MonthelyReport },
  { path: 'wallet', component: Wallet },
  { path: 'transactions', component: Transactions }
];
