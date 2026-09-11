import { Component, OnInit } from '@angular/core';
import { SystemConfigService } from '../../../core/services/system-config.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { CompanyProfile } from '../../../core/models';

@Component({
  selector: 'app-admin-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class AdminCompanySettingsComponent implements OnInit {
  profile: CompanyProfile = {
    id: '',
    companyName: '',
    website: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    registrationNumber: '',
    taxId: '',
    currency: 'INR',
    logoUrl: '',
    fiscalYearStart: 'April',
    workingDays: 'Mon - Sat'
  };
  isAdmin = false;
  saving = false;

  constructor(
    private configService: SystemConfigService,
    private authService: AuthService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    const u = this.authService.currentUser;
    this.isAdmin = u?.role === 'ADMIN';
    this.configService.getCompanyProfile().subscribe({
      next: (data) => this.profile = data,
      error: () => this.toast.error('Failed to load company profile')
    });
  }

  save(): void {
    this.saving = true;
    this.configService.updateCompanyProfile(this.profile).subscribe({
      next: () => { this.saving = false; this.toast.success('Company profile updated'); },
      error: () => { this.saving = false; this.toast.error('Failed to save company profile'); }
    });
  }
}