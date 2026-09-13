import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService, ToastService, ExcelExportService } from '../../../core/services';
import { Designation, Department } from '../../../core/models';

@Component({
  selector: 'app-admin-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class AdminDesignationsComponent implements OnInit {
  departments: Department[] = [];
  designations: Designation[] = [];

  searchTerm = '';
  selectedDepartment = '';
  selectedLevel = '';
  selectedStatus = '';
  selectAllChecked = false;

  sampleDesignations: Designation[] = [
    { id: '1', title: 'Software Architect', level: 'Level 1 - Executive', departmentName: 'Engineering', minSalary: 120000, maxSalary: 180000, employeeCount: 4, status: 'Active' },
    { id: '2', title: 'Team Lead', level: 'Level 2 - Senior', departmentName: 'Engineering', minSalary: 90000, maxSalary: 130000, employeeCount: 12, status: 'Active' },
    { id: '3', title: 'HR Manager', level: 'Level 2 - Senior', departmentName: 'Human Resources', minSalary: 85000, maxSalary: 115000, employeeCount: 6, status: 'Active' },
    { id: '4', title: 'Senior UX Designer', level: 'Level 3 - Mid Level', departmentName: 'Design', minSalary: 75000, maxSalary: 105000, employeeCount: 8, status: 'Active' },
    { id: '5', title: 'Marketing Executive', level: 'Level 4 - Entry Level', departmentName: 'Marketing', minSalary: 50000, maxSalary: 70000, employeeCount: 15, status: 'Active' },
    { id: '6', title: 'Financial Analyst', level: 'Level 3 - Mid Level', departmentName: 'Finance', minSalary: 68000, maxSalary: 95000, employeeCount: 7, status: 'Inactive' },
  ];

  constructor(
    private router: Router,
    private departmentService: DepartmentService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadDesignations();
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => {}
    });
  }

  loadDesignations(): void {
    this.departmentService.getDesignations().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.designations = data;
        } else {
          this.designations = [...this.sampleDesignations];
        }
      },
      error: () => {
        this.designations = [...this.sampleDesignations];
      }
    });
  }

  get filteredDesignations(): Designation[] {
    return this.designations.filter(d => {
      const matchesSearch = !this.searchTerm.trim() ||
        d.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (d.departmentName && d.departmentName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesDept = !this.selectedDepartment || d.departmentName === this.selectedDepartment;
      const matchesLevel = !this.selectedLevel || (d.level && d.level.includes(this.selectedLevel));
      const matchesStatus = !this.selectedStatus || (d.status || 'Active').toLowerCase() === this.selectedStatus.toLowerCase();

      return matchesSearch && matchesDept && matchesLevel && matchesStatus;
    });
  }

  get totalDesignationsCount(): number {
    return this.designations.length;
  }

  get executiveCount(): number {
    return this.designations.filter(d => d.level && (d.level.includes('Level 1') || d.level.includes('Level 2') || d.level.includes('Executive'))).length;
  }

  get totalEmployeesAssigned(): number {
    return this.designations.reduce((sum, d) => sum + (d.employeeCount || 0), 0);
  }

  get avgSalaryFormatted(): string {
    if (this.designations.length === 0) return '$0';
    const totalMin = this.designations.reduce((sum, d) => sum + (d.minSalary || 0), 0);
    const avg = Math.round(totalMin / this.designations.length);
    return `$${avg.toLocaleString()}`;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = '';
    this.selectedLevel = '';
    this.selectedStatus = '';
    this.selectAllChecked = false;
  }

  exportExcel(): void {
    if (this.filteredDesignations && this.filteredDesignations.length > 0) {
      const exportData = this.filteredDesignations.map(d => ({
        DesignationTitle: d.title,
        Department: d.departmentName || 'General',
        Level: d.level || 'Mid Level',
        MinSalary: d.minSalary ? `$${d.minSalary.toLocaleString()}` : 'N/A',
        MaxSalary: d.maxSalary ? `$${d.maxSalary.toLocaleString()}` : 'N/A',
        EmployeesAssigned: d.employeeCount || 0,
        Status: d.status || 'Active'
      }));
      this.excelExport.exportToExcel(exportData, 'Designations_List');
    } else {
      this.toast.error('No designations data to export');
    }
  }

  onEdit(desig: Designation): void {
    this.router.navigate(['/admin/designations', desig.id, 'edit']);
  }

  async onDelete(desig: Designation): Promise<void> {
    const confirmed = await this.toast.confirm(
      `Deactivate designation "${desig.title}"?`,
      'This action will deactivate the selected designation.'
    );
    if (!confirmed) return;

    this.departmentService.deleteDesignation(desig.id).subscribe({
      next: () => {
        this.toast.success('Designation deactivated');
        this.loadDesignations();
      },
      error: () => {
        desig.status = 'Inactive';
        this.toast.success('Designation deactivated');
      }
    });
  }
}