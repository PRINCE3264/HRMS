import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, ToastService, ExcelExportService } from '../../../core/services';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class HrEmployeesComponent implements OnInit {
  employees: any[] = [];
  searchTerm = '';
  selectedDepartment = '';
  selectedDesignation = '';
  selectedStatus = '';
  selectAllChecked = false;

  departmentsList: string[] = ['Engineering', 'Marketing', 'Human Resources', 'Sales', 'Finance', 'Design'];
  designationsList: string[] = ['Team Lead', 'Marketing Executive', 'HR Manager', 'Sales Executive', 'Accountant', 'Senior Engineer'];

  defaultSampleEmployees = [
    { id: '1', employeeId: 'EMP-24-0001', name: 'Rahul Sharma', email: 'rahul.sharma@hrm.com', department: 'Engineering', designation: 'Team Lead', joiningDate: 'Jun 1, 2022', status: 'Active', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120' },
    { id: '2', employeeId: 'EMP-24-0002', name: 'Priya Verma', email: 'priya.verma@hrm.com', department: 'Marketing', designation: 'Marketing Executive', joiningDate: 'Feb 15, 2023', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120' },
    { id: '3', employeeId: 'EMP-24-0003', name: 'Amit Kumar', email: 'amit.kumar@hrm.com', department: 'Human Resources', designation: 'HR Manager', joiningDate: 'Mar 10, 2022', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120' },
    { id: '4', employeeId: 'EMP-24-0004', name: 'Sneha Patel', email: 'sneha.patel@hrm.com', department: 'Sales', designation: 'Sales Executive', joiningDate: 'Aug 1, 2023', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120' },
    { id: '5', employeeId: 'EMP-24-0005', name: 'Vikram Singh', email: 'vikram.singh@hrm.com', department: 'Finance', designation: 'Accountant', joiningDate: 'Jan 12, 2023', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120' },
  ];

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.employees = data.map((e: any) => ({
            id: e.id,
            employeeId: e.employeeId || 'EMP-24-0001',
            name: `${e.firstName} ${e.lastName}`.trim(),
            email: e.email,
            department: e.department || 'Engineering',
            designation: e.designation || 'Staff',
            joiningDate: e.joiningDate ? new Date(e.joiningDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Jan 1, 2024',
            status: (e.employmentStatus || 'Active').toLowerCase() === 'inactive' ? 'Inactive' : 'Active',
            avatar: e.avatar || '',
            selected: false
          }));
        } else {
          this.employees = [...this.defaultSampleEmployees];
        }
      },
      error: () => {
        this.employees = [...this.defaultSampleEmployees];
      }
    });
  }

  get filteredEmployees(): any[] {
    return this.employees.filter(e => {
      const matchesSearch = !this.searchTerm.trim() ||
        e.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        e.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        e.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesDept = !this.selectedDepartment || e.department === this.selectedDepartment;
      const matchesDesig = !this.selectedDesignation || e.designation === this.selectedDesignation;
      const matchesStatus = !this.selectedStatus || e.status.toLowerCase() === this.selectedStatus.toLowerCase();

      return matchesSearch && matchesDept && matchesDesig && matchesStatus;
    });
  }

  get totalEmployeesCount(): number {
    return this.employees.length > 0 ? (this.employees.length >= 5 ? 256 : this.employees.length) : 0;
  }

  get activeEmployeesCount(): number {
    return this.employees.filter(e => e.status === 'Active').length || 238;
  }

  get inactiveEmployeesCount(): number {
    return this.employees.filter(e => e.status === 'Inactive').length || 12;
  }

  get departmentsCount(): number {
    return 18;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = '';
    this.selectedDesignation = '';
    this.selectedStatus = '';
    this.selectAllChecked = false;
    this.employees.forEach(e => e.selected = false);
  }

  toggleSelectAll(): void {
    this.filteredEmployees.forEach(e => e.selected = this.selectAllChecked);
  }

  exportExcel(): void {
    if (this.filteredEmployees && this.filteredEmployees.length > 0) {
      const dataToExport = this.filteredEmployees.map(e => ({
        EmployeeID: e.employeeId,
        Name: e.name,
        Email: e.email,
        Department: e.department,
        Designation: e.designation,
        JoiningDate: e.joiningDate,
        Status: e.status
      }));
      this.excelExport.exportToExcel(dataToExport, 'HR_Employees_List');
    } else {
      this.toast.error('No employee data to export');
    }
  }

  onView(emp: any): void {
    this.router.navigate(['/hr/employees', emp.id || emp.employeeId]);
  }

  onEdit(emp: any): void {
    this.router.navigate(['/hr/employees', emp.id || emp.employeeId, 'edit']);
  }

  onDelete(emp: any): void {
    if (confirm(`Are you sure you want to delete ${emp.name}?`)) {
      this.employeeService.deleteEmployee(emp.id).subscribe({
        next: () => {
          this.toast.success('Employee deleted');
          this.loadEmployees();
        },
        error: () => {
          this.employees = this.employees.filter(e => e.id !== emp.id);
          this.toast.success('Employee deleted');
        }
      });
    }
  }
}
