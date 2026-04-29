export interface Wallet {
  id: string;
  user_id?: string;
  bank_name: string;
  account_last_four: string;
  created_at: string;
}

export interface MonthlyBudget {
  id: string;
  wallet_id: string;
  month: number;
  year: number;
  starting_balance: number;
  monthly_limit: number;
  created_at: string;
}

export interface Transaction {
  id: string;
  budget_id: string;
  main_category: string;
  sub_category: string;
  amount: number;
  type: 'expense' | 'income';
  note: string;
  transaction_date: string;
}
