import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../core/services/supabase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth {
  email: string = '';
  password: string = '';
  isSignUp: boolean = false;
  isLoading: boolean = false;

  constructor(
    private supabase: SupabaseService,
    private router: Router,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  toggleMode() {
    this.isSignUp = !this.isSignUp;
  }

  async onSubmit() {
    if (!this.email || !this.password) {
      this.toastr.error('Please fill in all fields');
      return;
    }

    this.isLoading = true;
    try {
      if (this.isSignUp) {
        const { data, error } = await this.supabase.client.auth.signUp({ 
          email: this.email, 
          password: this.password 
        });
        
        if (error) throw error;

        if (data.user && data.user.identities && data.user.identities.length === 0) {
          this.toastr.warning('This email is already registered. Please Sign In instead.', 'Account Exists');
          this.isSignUp = false;
        } else if (data.user && !data.session) {
          this.toastr.info('Please check your email to confirm your registration!', 'Confirmation Required');
          this.isSignUp = false;
        } else {
          this.toastr.success('Registration successful!');
          this.isSignUp = false;
        }
      } else {
        const res = await this.supabase.signIn(this.email, this.password);
        this.toastr.success('Signed in successfully!');
        
        const hasWallet = await this.supabase.hasWallet();
        if (hasWallet) {
          await this.router.navigate(['/dashboard']);
        } else {
          await this.router.navigate(['/']);
        }
      }
    } catch (error: any) {
      this.toastr.error(error.message || 'Authentication failed');
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges(); // Force UI update
    }
  }
}
