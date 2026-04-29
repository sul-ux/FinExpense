import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Auth methods
  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getSession() {
    const { data, error } = await this.supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  }

  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  }

  async hasWallet(): Promise<boolean> {
    const user = await this.getUser();
    if (!user) return false;

    const { data, error } = await this.supabase
      .from('wallets')
      .select('id, user_id')
      .eq('user_id', user.id)
      .limit(1);

    if (error) {
      console.error('SupabaseService: Wallet check error', error);
      return false;
    }

    return data && data.length > 0;
  }

  // Generic getter to access Supabase from other services
  get client(): SupabaseClient {
    return this.supabase;
  }
}
