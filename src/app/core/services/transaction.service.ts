import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Transaction, Wallet, MonthlyBudget } from '../../shared/models/finance.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private supabase: SupabaseService) {}

  async getWallets() {
    const { data, error } = await this.supabase.client
      .from('wallets')
      .select('*');
    if (error) throw error;
    return data as Wallet[];
  }

  async createWallet(wallet: Partial<Wallet>) {
    const user = await this.supabase.getUser();
    const walletWithUser = { ...wallet, user_id: user?.id };
    
    const { data, error } = await this.supabase.client
      .from('wallets')
      .insert([walletWithUser])
      .select();
    if (error) throw error;
    return data?.[0] as Wallet;
  }

  async getBudget(walletId: string, month: number, year: number) {
    const { data, error } = await this.supabase.client
      .from('monthly_budgets')
      .select('*')
      .eq('wallet_id', walletId)
      .eq('month', month)
      .eq('year', year)
      .maybeSingle();
    if (error) throw error;
    return data as MonthlyBudget;
  }

  async createBudget(budget: Partial<MonthlyBudget>) {
    const { data, error } = await this.supabase.client
      .from('monthly_budgets')
      .insert([budget])
      .select();
    if (error) throw error;
    return data?.[0] as MonthlyBudget;
  }

  async getBudgetWithWallet(budgetId: string) {
    const { data, error } = await this.supabase.client
      .from('monthly_budgets')
      .select('*, wallets(*)')
      .eq('id', budgetId)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    // Normalize wallet data
    const wallet = Array.isArray(data.wallets) ? data.wallets[0] : data.wallets;
    return { ...data, wallet };
  }

  async getTransactions(budgetId?: string) {
    let query = this.supabase.client.from('transactions').select('*');
    if (budgetId) query = query.eq('budget_id', budgetId);
    
    const { data, error } = await query.order('transaction_date', { ascending: false });
    if (error) throw error;
    return data as Transaction[];
  }

  async getRecentTransactions(limit: number = 5, budgetId?: string) {
    let query = this.supabase.client.from('transactions').select('*');
    if (budgetId) query = query.eq('budget_id', budgetId);

    const { data, error } = await query
      .order('transaction_date', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data as Transaction[];
  }

  async addTransaction(transaction: Partial<Transaction>) {
    const { data, error } = await this.supabase.client
      .from('transactions')
      .insert([transaction])
      .select();

    if (error) throw error;
    return data?.[0] as Transaction;
  }

  async updateTransaction(id: string, updates: Partial<Transaction>) {
    const { data, error } = await this.supabase.client
      .from('transactions')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data?.[0] as Transaction;
  }

  async deleteTransaction(id: string) {
    const { error } = await this.supabase.client
      .from('transactions')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}
