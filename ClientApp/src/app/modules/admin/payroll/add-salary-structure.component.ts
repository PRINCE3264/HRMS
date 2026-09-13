import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService, PayrollService, ToastService } from '../../../core/services';
import { ExtendedSalaryStructure } from './salary-structures.component';

@Component({
  selector: 'app-admin-add-salary-structure',
  templateUrl: './add-salary-structure.component.html',
  styleUrls: ['./add-salary-structure.component.scss']
})
export class AdminSalaryStructureAddComponent implements OnInit {
  saving = false;
  employees: any[] = [];
  STORAGE_KEY = 'hrm_salary_structures';

  form = {
    employeeId: '',
    basicSalary: 8500,
    hra: 2500,
    conveyance: 400,
    medicalAllowance: 300,
    specialAllowance: 500,
    pfPercent: 12,
    esiPercent: 1.75,
    tdsPercent: 10,
    professionalTax: 150,
    effectiveFrom: new Date().toISOString().slice(0, 10),
    effectiveTo: '',
    status: 'Active'
  };

  constructor(
    private employeeService: EmployeeService,
    private payrollService: PayrollService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees({ page: 1, pageSize: 100 }).subscribe({
      next: (res) => {
        if (res && res.items && res.items.length > 0) {
          this.employees = res.items;
        } else {
          this.initMockEmployees();
        }
      },
      error: () => this.initMockEmployees()
    });
  }

  initMockEmployees(): void {
    this.employees = [
      { id: 'EMP-101', firstName: 'Sarah', lastName: 'Jenkins', departmentName: 'Engineering', designationName: 'Senior Frontend Developer' },
      { id: 'EMP-102', firstName: 'Alex', lastName: 'Rivera', departmentName: 'Design & UX', designationName: 'Lead UI/UX Designer' },
      { id: 'EMP-103', firstName: 'Michael', lastName: 'Chang', departmentName: 'Engineering', designationName: 'DevOps Architect' },
      { id: 'EMP-104', firstName: 'Emily', lastName: 'Watson', departmentName: 'Human Resources', designationName: 'HR Specialist' },
      { id: 'EMP-105', firstName: 'David', lastName: 'Kim', departmentName: 'Finance', designationName: 'Financial Analyst' },
      { id: 'EMP-106', firstName: 'Priya', lastName: 'Sharma', departmentName: 'Engineering', designationName: 'Full Stack Engineer' }
    ];
  }

  applyAutoHra(): void {
    const basic = Number(this.form.basicSalary) || 0;
    this.form.hra = Math.round(basic * 0.4); // 40% HRA
  }

  applyStandardDefaults(): void {
    this.form.pfPercent = 12;
    this.form.esiPercent = 1.75;
    this.form.tdsPercent = 10;
    this.form.professionalTax = 150;
    this.applyAutoHra();
  }

  get totalEarnings(): number {
    return (Number(this.form.basicSalary) || 0) +
           (Number(this.form.hra) || 0) +
           (Number(this.form.conveyance) || 0) +
           (Number(this.form.medicalAllowance) || 0) +
           (Number(this.form.specialAllowance) || 0);
  }

  get totalDeductions(): number {
    const basic = Number(this.form.basicSalary) || 0;
    const gross = this.totalEarnings;
    const pf = Math.round(basic * ((Number(this.form.pfPercent) || 0) / 100));
    const esi = Math.round(gross * ((Number(this.form.esiPercent) || 0) / 100));
    const tds = Math.round(gross * ((Number(this.form.tdsPercent) || 0) / 100));
    const pt = Number(this.form.professionalTax) || 0;
    return pf + esi + tds + pt;
  }

  get netPay(): number {
    return Math.max(0, this.totalEarnings - this.totalDeductions);
  }

  saveStructure(): void {
    if (!this.form.employeeId) {
      this.toast.error('Please select an employee');
      return;
    }

    if (Number(this.form.basicSalary) <= 0) {
      this.toast.error('Basic salary must be greater than 0');
      return;
    }

    this.saving = true;
    const emp = this.employees.find(e => e.id === this.form.employeeId);
    const empName = emp ? `${emp.firstName} ${emp.lastName}` : 'Employee';

    // Fetch existing structures from localStorage
    let existing: ExtendedSalaryStructure[] = [];
    const local = localStorage.getItem(this.STORAGE_KEY);
    if (local) {
      try {
        existing = JSON.parse(local);
      } catch (e) {
        existing = [];
      }
    }

    const newStructure: ExtendedSalaryStructure = {
      id: `SS-${1000 + existing.length + 1}`,
      employeeId: this.form.employeeId,
      employeeCode: emp ? emp.id : this.form.employeeId,
      employeeName: empName,
      avatar: `https://i.pravatar.cc/150?u=${this.form.employeeId}`,
      department: emp?.departmentName || 'Engineering',
      designation: emp?.designationName || 'Specialist',
      basicSalary: Number(this.form.basicSalary),
      hra: Number(this.form.hra),
      conveyance: Number(this.form.conveyance),
      medicalAllowance: Number(this.form.medicalAllowance),
      specialAllowance: Number(this.form.specialAllowance),
      pfPercent: Number(this.form.pfPercent),
      esiPercent: Number(this.form.esiPercent),
      tdsPercent: Number(this.form.tdsPercent),
      professionalTax: Number(this.form.professionalTax),
      totalEarnings: this.totalEarnings,
      totalDeductions: this.totalDeductions,
      netPay: this.netPay,
      effectiveFrom: this.form.effectiveFrom,
      effectiveTo: this.form.effectiveTo,
      isActive: this.form.status === 'Active',
      status: this.form.status,
      selected: false
    };

    existing.unshift(newStructure);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));

    this.payrollService.saveSalaryStructure(newStructure as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.saving = false;
    this.toast.success(`Salary structure created for ${empName}`);
    this.router.navigate(['/admin/payroll/salary-structures']);
  }

  cancel(): void {
    this.router.navigate(['/admin/payroll/salary-structures']);
  }
}
