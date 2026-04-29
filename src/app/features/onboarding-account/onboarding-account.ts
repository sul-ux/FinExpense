import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupabaseService } from '../../core/services/supabase.service';

@Component({
  selector: 'app-onboarding-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './onboarding-account.html',
  styleUrl: './onboarding-account.scss'
})
export class OnboardingAccount implements OnInit {
  bankName: string = '';
  accountLastFour: string = '';

  constructor(
    private router: Router, 
    private toastr: ToastrService,
    private supabase: SupabaseService
  ) {}

  ngOnInit() {
    // Clear temp state when starting fresh
    localStorage.removeItem('temp_bank_name');
    localStorage.removeItem('temp_account_last_four');
  }

  onSubmit() {
    if (!this.bankName) {
      this.toastr.error('Bank Name is mandatory!', 'Required Field');
      return;
    }

    if (!this.accountLastFour || this.accountLastFour.length !== 4) {
      this.toastr.error('Please enter a valid 4-digit account number!', 'Required Field');
      return;
    }

    // Store temporarily or navigate with state
    localStorage.setItem('temp_bank_name', this.bankName);
    localStorage.setItem('temp_account_last_four', this.accountLastFour);
    this.router.navigate(['/onboarding-baseline']);
  }

  async logout() {
    await this.supabase.signOut();
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
