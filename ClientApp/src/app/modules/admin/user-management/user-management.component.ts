import { Component, OnInit } from '@angular/core';
import { UserManagementService, ToastService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class AdminUserManagementComponent implements OnInit {
  searchTerm: string = '';
  roleFilter: string = 'ALL';

  showUserModal: boolean = false;
  showResetModal: boolean = false;
  selectedUser: any = null;

  newUser = {
    username: '',
    name: '',
    email: '',
    role: 'Employee',
    department: 'Engineering',
    mfa: 'Yes',
    status: 'ACTIVE'
  };

  columns: TableColumn[] = [
    { key: 'username', label: 'Username', sortable: true },
    { key: 'name', label: 'Full Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'lastLogin', label: 'Last Login', sortable: true },
    { key: 'mfa', label: 'MFA' },
    { key: 'status', label: 'Status', type: 'status' }
  ];

  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#4461f6' },
    { label: 'Reset Password', icon: 'fas fa-key', action: 'reset', color: '#f59e0b' },
    { label: 'Delete', icon: 'fas fa-trash', action: 'delete', color: '#ef4444' }
  ];

  users: any[] = [];

  constructor(private userManagementService: UserManagementService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userManagementService.getUsers().subscribe({
      next: (data) => this.users = (data || []).map((u: any) => ({
        id: u.id,
        username: u.username || (u.employeeId || u.email?.split('@')[0] || ''),
        name: `${u.firstName || ''} ${u.lastName || ''}`.trim(),
        email: u.email,
        role: this.roleLabel(u.role),
        department: u.department || '',
        lastLogin: '',
        mfa: 'No',
        status: 'ACTIVE'
      })),
      error: () => this.toast.error('Failed to load users')
    });
  }

  private roleLabel(role: string): string {
    switch ((role || '').toUpperCase()) {
      case 'ADMIN': return 'Super Admin';
      case 'HR': return 'HR Admin';
      case 'TL': return 'Team Lead';
      default: return 'Employee';
    }
  }

  get filteredUsers() {
    return this.users.filter(u => {
      const matchesSearch = u.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            u.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            u.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            u.department.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = this.roleFilter === 'ALL' || u.role === this.roleFilter;
      return matchesSearch && matchesRole;
    });
  }

  get activeUserCount() {
    return this.users.filter(u => u.status === 'ACTIVE').length;
  }

  get inactiveUserCount() {
    return this.users.filter(u => u.status === 'INACTIVE').length;
  }

  get adminCount() {
    return this.users.filter(u => u.role.includes('Admin')).length;
  }

  openUserModal() {
    this.showUserModal = true;
  }

  closeUserModal() {
    this.showUserModal = false;
  }

  saveUser() {
    if (!this.newUser.username || !this.newUser.name) return;
    this.users.unshift({
      id: Date.now(),
      username: this.newUser.username,
      name: this.newUser.name,
      email: this.newUser.email || `${this.newUser.username}@hrm.com`,
      role: this.newUser.role,
      department: this.newUser.department,
      lastLogin: 'Never',
      mfa: this.newUser.mfa,
      status: this.newUser.status
    });
    this.newUser = { username: '', name: '', email: '', role: 'Employee', department: 'Engineering', mfa: 'Yes', status: 'ACTIVE' };
    this.showUserModal = false;
    this.toast.success('User added locally (no create-user API available)');
  }

  onAction(event: { action: string; row: any }): void {
    if (event.action === 'delete') {
      this.userManagementService.deleteUser(event.row.id).subscribe({
        next: () => {
          this.toast.success('User deleted');
          this.loadUsers();
        },
        error: () => this.toast.error('Failed to delete user')
      });
    } else if (event.action === 'reset') {
      this.selectedUser = event.row;
      this.showResetModal = true;
    }
  }

  closeResetModal() {
    this.showResetModal = false;
    this.selectedUser = null;
  }

  confirmResetPassword() {
    this.closeResetModal();
  }
}