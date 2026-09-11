import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class AdminDepartmentsComponent implements OnInit {
  showAdd = false;
  departments: any[] = [];

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data.map((d: any) => ({ ...d, head: d.headName || 'Unassigned' })),
      error: () => this.toast.error('Failed to load departments')
    });
  }
}
