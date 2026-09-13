import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, PayrollService, ToastService } from '../../../core/services';
import { ExtendedSalaryStructure } from './salary-structures.component';

@Component({
  selector: 'app-admin-edit-salary-structure',
  templateUrl: './edit-salary-structure.component.html',
  styleUrls: ['./edit-salary-structure.component.scss']
})
export class AdminSalaryStructureEditComponent implements OnInit {
  saving = false;
  loading = true;
  structureId = '';
  employees: any[] = [];
  STORAGE_KEY = 'hrm_salary_structures';

  targetStructure: ExtendedSalaryStructure | null = null;

  form = {
    employeeId: '',
    basicSalary: 0,
    hra: 0,
    conveyance: 0,
    medicalAllowance: 0,
    specialAllowance: 0,
    pfPercent: 12,
    esiPercent: 1.75,
    tdsPercent: 10,
    professionalTax: 150,
    effectiveFrom: '',
    effectiveTo: '',
    status: 'Active'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private payrollService: PayrollService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.structureId = this.route.snapshot.params['id'];
    this.loadEmployees();
    this.loadStructure();
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
      { id: 'EMP-105', firstName: 'David', lastName: 'Kim', departmentName: 'Finance', designationName: 'Financial Analyst' }
    ];
  }

  loadStructure(): void {
    this.loading = true;
    let structures: ExtendedSalaryStructure[] = [];
    const local = localStorage.getItem(this.STORAGE_KEY);
    if (local) {
      try {
        structures = JSON.parse(local);
      } catch (e) {
        structures = [];
      }
    }

    const found = structures.find(s => s.id === this.structureId || s.employeeId === this.structureId);
    if (found) {
      this.targetStructure = found;
      this.populateForm(found);
      this.loading = false;
    } else {
      this.payrollService.getSalaryStructure(this.structureId).subscribe({
        next: (data: any) => {
          if (data) {
            this.targetStructure = data as ExtendedSalaryStructure;
            this.populateForm(data as ExtendedSalaryStructure);
          } else {
            this.toast.error('Salary structure not found');
            this.router.navigate(['/admin/payroll/salary-structures']);
          }
          this.loading = false;
        },
        error: () => {
          this.toast.error('Salary structure not found');
          this.router.navigate(['/admin/payroll/salary-structures']);
          this.loading = false;
        }
      });
    }
  }

  populateForm(s: ExtendedSalaryStructure): void {
    this.form = {
      employeeId: s.employeeId || '',
      basicSalary: s.basicSalary || 0,
      hra: s.hra || 0,
      conveyance: s.conveyance || 0,
      medicalAllowance: s.medicalAllowance || 0,
      specialAllowance: s.specialAllowance || 0,
      pfPercent: s.pfPercent || 12,
      esiPercent: s.esiPercent || 1.75,
      tdsPercent: s.tdsPercent || 10,
      professionalTax: s.professionalTax || 150,
      effectiveFrom: s.effectiveFrom ? s.effectiveFrom.slice(0, 10) : new Date().toISOString().slice(0, 10),
      effectiveTo: s.effectiveTo ? s.effectiveTo.slice(0, 10) : '',
      status: s.status || 'Active'
    };
  }

  applyAutoHra(): void {
    const basic = Number(this.form.basicSalary) || 0;
    this.form.hra = Math.round(basic * 0.4);
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
    if (!this.form.employeeId || Number(this.form.basicSalary) <= 0) {
      this.toast.error('Please specify a valid basic salary');
      return;
    }

    this.saving = true;
    const emp = this.employees.find(e => e.id === this.form.employeeId);
    const empName = emp ? `${emp.firstName} ${emp.lastName}` : (this.targetStructure?.employeeName || 'Employee');

    let existing: ExtendedSalaryStructure[] = [];
    const local = localStorage.getItem(this.STORAGE_KEY);
    if (local) {
      try {
        existing = JSON.parse(local);
      } catch (e) {
        existing = [];
      }
    }

    const updatedItem: ExtendedSalaryStructure = {
      id: this.structureId,
      employeeId: this.form.employeeId,
      employeeCode: emp ? emp.id : this.form.employeeId,
      employeeName: empName,
      avatar: this.targetStructure?.avatar || `https://i.pravatar.cc/150?u=${this.form.employeeId}`,
      department: emp?.departmentName || this.targetStructure?.department || 'Engineering',
      designation: emp?.designationName || this.targetStructure?.designation || 'Specialist',
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

    const idx = existing.findIndex(s => s.id === this.structureId);
    if (idx !== -1) {
      existing[idx] = updatedItem;
    } else {
      existing.unshift(updatedItem);
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existing));

    this.payrollService.saveSalaryStructure(updatedItem as any).subscribe({
      next: () => {},
      error: () => {}
    });

    this.saving = false;
    this.toast.success(`Updated salary structure for ${empName}`);
    this.router.navigate(['/admin/payroll/salary-structures']);
  }

  cancel(): void {
    this.router.navigate(['/admin/payroll/salary-structures']);
  }
}
