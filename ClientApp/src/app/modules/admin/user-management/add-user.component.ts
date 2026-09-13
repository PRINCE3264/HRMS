import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-add-user',
  template: `
    <app-page-header title="Add New User" subtitle="Create a new user account and set system permissions" [breadcrumbs]="[{label:'Dashboard',link:'/dashboard'},{label:'Users',link:'/admin/users'},{label:'Add User'}]">
      <button class="btn btn--cancel" (click)="cancel()"><i class="fas fa-arrow-left"></i> Back to Users</button>
    </app-page-header>

    <div class="form-card">
      <div class="form-header">
        <h3><i class="fas fa-user-plus"></i> User Account Details</h3>
        <p>Fill in the required information to provision a new user access credential.</p>
      </div>

      <div class="form-body">
        <div class="form-section">
          <h4>Account Profile</h4>
          <div class="form-row">
            <div class="form-group">
              <label>Username *</label>
              <input type="text" [(ngModel)]="user.username" placeholder="e.g. jdoe" />
            </div>
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" [(ngModel)]="user.name" placeholder="e.g. John Doe" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" [(ngModel)]="user.email" placeholder="john.doe@hrm.com" />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" [(ngModel)]="user.phone" placeholder="+91 98765 43210" />
            </div>
          </div>
        </div>

        <div class="form-section">
          <h4>Role & Department Access</h4>
          <div class="form-row">
            <div class="form-group">
              <label>System Role *</label>
              <select [(ngModel)]="user.role">
                <option value="Super Admin">Super Admin</option>
                <option value="HR Admin">HR Admin</option>
                <option value="Finance Admin">Finance Admin</option>
                <option value="Department Manager">Department Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div class="form-group">
              <label>Department</label>
              <select [(ngModel)]="user.department">
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
                <option value="IT">IT</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h4>Security & Status</h4>
          <div class="form-row">
            <div class="form-group">
              <label>MFA Authentication Enforced</label>
              <select [(ngModel)]="user.mfa">
                <option value="Yes">Yes (Required)</option>
                <option value="No">No (Optional)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Account Status</label>
              <select [(ngModel)]="user.status">
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="form-footer">
        <button class="btn btn--cancel" (click)="cancel()">Cancel</button>
        <button class="btn btn--primary" (click)="save()"><i class="fas fa-check"></i> Create User Account</button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .btn { padding: 10px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; }
    .btn--primary { background: linear-gradient(135deg, #4461f6 0%, #1e40af 100%); color: #fff; box-shadow: 0 4px 12px rgba(68,97,246,0.3); }
    .btn--primary:hover { transform: translateY(-1px); }
    .btn--cancel { background: #f1f5f9; color: #64748b; }
    .btn--cancel:hover { background: #e2e8f0; }

    .form-card { background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0,0,0,0.04); overflow: hidden; margin-top: 16px; }
    .form-header { padding: 24px 28px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
    .form-header h3 { margin: 0 0 4px 0; font-size: 18px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 10px; }
    .form-header h3 i { color: #4461f6; }
    .form-header p { margin: 0; font-size: 13px; color: #64748b; }

    .form-body { padding: 28px; display: flex; flex-direction: column; gap: 24px; }
    .form-section { display: flex; flex-direction: column; gap: 16px; }
    .form-section h4 { margin: 0; font-size: 14px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 13px; font-weight: 600; color: #475569; }
    .form-group input, .form-group select { padding: 11px 14px; border-radius: 10px; border: 1px solid #cbd5e1; font-size: 14px; outline: none; transition: border-color 0.2s; }
    .form-group input:focus, .form-group select:focus { border-color: #4461f6; }

    .form-footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 12px; }
  `]
})
export class AdminUserAddComponent implements OnInit {
  user = {
    username: '',
    name: '',
    email: '',
    phone: '',
    role: 'Employee',
    department: 'Engineering',
    mfa: 'Yes',
    status: 'ACTIVE'
  };

  constructor(
    private userManagementService: UserManagementService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  save(): void {
    if (!this.user.username || !this.user.name) {
      this.toast.error('Please enter required fields (Username and Full Name)');
      return;
    }

    this.toast.success('User account created successfully');
    this.router.navigate(['/admin/users']);
  }

  cancel(): void {
    this.router.navigate(['/admin/users']);
  }
}
