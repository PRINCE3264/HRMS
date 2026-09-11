import { Component, OnInit } from '@angular/core';
import { ManagementService, ToastService } from '../../../../core/services';
import { ManagedEmployee } from '../../../../core/models';
import { TableColumn } from '../../../../core/models';

@Component({
  selector: 'app-admin-hr-management',
  templateUrl: './hr-management.component.html',
  styleUrls: ['./hr-management.component.scss']
})
export class AdminHrManagementComponent implements OnInit {
  hrMembers: ManagedEmployee[] = [];
  loading = true;

  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', sortable: true, width: '110px' },
    { key: 'fullName', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'designation', label: 'Designation', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'teamName', label: 'Team', sortable: true }
  ];

  constructor(
    private managementService: ManagementService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadHrMembers();
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
}