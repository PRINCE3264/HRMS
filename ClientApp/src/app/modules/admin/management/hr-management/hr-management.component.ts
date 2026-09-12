import { Component, OnInit } from '@angular/core';
import { ManagementService, ToastService } from '../../../../core/services';
import { ManagedEmployee, TableColumn } from '../../../../core/models';

@Component({
  selector: 'app-admin-hr-management',
  templateUrl: './hr-management.component.html',
  styleUrls: ['./hr-management.component.scss']
})
export class AdminHrManagementComponent implements OnInit {
  hrMembers: ManagedEmployee[] = [];
  candidates: ManagedEmployee[] = [];
  selectedEmployeeId = '';
  assigning = false;
  loading = true;

  showRevokeConfirm = false;
  revoking: ManagedEmployee | null = null;

  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', sortable: true, width: '110px' },
    { key: 'fullName', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'teamName', label: 'Team', sortable: true }
  ];

  tableActions = [
    { label: 'Revoke HR', icon: 'fas fa-user-minus', action: 'revoke', color: '#ef4444' }
  ];

  constructor(
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadHrMembers();
    this.loadCandidates();
  }

  loadHrMembers(): void {
    this.loading = true;
    this.managementService.getHrMembers().subscribe({
      next: (data) => {
        this.hrMembers = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toast.error('Failed to load HR members');
      }
    });
  }

  loadCandidates(): void {
    this.managementService.getEmployees().subscribe({
      next: (data) => this.refreshCandidates(data),
      error: () => this.toast.error('Failed to load employees')
    });
  }

  refreshCandidates(data: ManagedEmployee[]): void {
    this.candidates = (data || []).filter(
      (e) => e.hasAccount && e.active && e.role !== 'HR' && e.role !== 'ADMIN'
    );
    if (!this.candidates.some((c) => c.id === this.selectedEmployeeId)) {
      this.selectedEmployeeId = '';
    }
  }

  assignAsHR(): void {
    if (!this.selectedEmployeeId) {
      this.toast.warning('Select an employee to assign an HR role');
      return;
    }
    this.assigning = true;
    this.managementService.assignRole(this.selectedEmployeeId, 'HR').subscribe({
      next: () => {
        this.assigning = false;
        this.toast.success('Employee assigned an HR role');
        this.reloadAll();
      },
      error: () => {
        this.assigning = false;
        this.toast.error('Failed to assign role');
      }
    });
  }

  onAction(event: { action: string; row: ManagedEmployee }): void {
    if (event.action === 'revoke') {
      this.revoking = event.row;
      this.showRevokeConfirm = true;
    }
  }

  confirmRevoke(): void {
    if (!this.revoking) return;
    const employee = this.revoking;
    this.revoking = null;
    this.showRevokeConfirm = false;
    this.managementService.assignRole(employee.id, 'EMPLOYEE').subscribe({
      next: () => {
        this.toast.success(`${employee.fullName} is no longer an HR member`);
        this.reloadAll();
      },
      error: () => this.toast.error('Failed to revoke role')
    });
  }

  cancelRevoke(): void {
    this.revoking = null;
    this.showRevokeConfirm = false;
  }

  reloadAll(): void {
    this.loadHrMembers();
    this.managementService.getEmployees().subscribe((data) => this.refreshCandidates(data));
  }
}