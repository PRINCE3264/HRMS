import { Component, OnInit } from '@angular/core';
import { PayrollService, EmployeeService, ToastService } from '../../../core/services';
import { TableColumn, SalaryStructure } from '../../../core/models';

@Component({
  selector: 'app-admin-salary-structures',
  templateUrl: './salary-structures.component.html',
  styleUrls: ['./salary-structures.component.scss']
})
export class AdminSalaryStructuresComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'employeeCode', label: 'Code', width: '100px' },
    { key: 'employeeName', label: 'Employee', sortable: true },
    { key: 'basicSalary', label: 'Basic', type: 'currency', sortable: true },
    { key: 'totalEarnings', label: 'Gross', type: 'currency', sortable: true },
    { key: 'totalDeductions', label: 'Deductions', type: 'currency', sortable: true },
    { key: 'netPay', label: 'Net Pay', type: 'currency', sortable: true },
    { key: 'effectiveFrom', label: 'Effective From', type: 'date', sortable: true },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Edit', icon: 'fas fa-edit', action: 'edit', color: '#f59e0b' },
    { label: 'Breakdown', icon: 'fas fa-chart-pie', action: 'breakdown', color: '#6366f1' },
    { label: 'Deactivate', icon: 'fas fa-ban', action: 'deactivate', color: '#ef4444' }
  ];

  structures: SalaryStructure[] = [];
  employees: any[] = [];
  total = 0;
  page = 1;
  pageSize = 10;
  search = '';
  showForm = false;
  editing: SalaryStructure | null = null;
  breakdown: any = null;

  form = {
    employeeId: '',
    basicSalary: 0,
    hra: 0,
    conveyance: 0,
    medicalAllowance: 0,
    specialAllowance: 0,
    pfPercent: 12,
    esiPercent: 0,
    tdsPercent: 0,
    professionalTax: 0,
    effectiveFrom: new Date().toISOString().slice(0, 10),
    effectiveTo: ''
  };

  constructor(
    private payrollService: PayrollService,
    private employeeService: EmployeeService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadStructures();
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data.filter((e: any) => e.employmentStatus === 'ACTIVE' || e.employmentStatus === 'PROBATION'),
      error: () => {}
    });
  }

  loadStructures(): void {
    this.payrollService.getSalaryStructures({ page: this.page, pageSize: this.pageSize, search: this.search || undefined }).subscribe({
      next: (res) => {
        this.structures = res.items;
        this.total = res.total;
      },
      error: () => this.toast.error('Failed to load salary structures')
    });
  }

  computeTotals(): { gross: number; deductions: number; net: number } {
    const gross = Number(this.form.basicSalary) + Number(this.form.hra) + Number(this.form.conveyance)
      + Number(this.form.medicalAllowance) + Number(this.form.specialAllowance);
    const pf = Number(this.form.basicSalary) * (Number(this.form.pfPercent) / 100);
    const esi = gross * (Number(this.form.esiPercent) / 100);
    const tds = gross * (Number(this.form.tdsPercent) / 100);
    const deductions = pf + esi + tds + Number(this.form.professionalTax);
    return { gross, deductions, net: gross - deductions };
  }

  openCreate(): void {
    this.editing = null;
    this.form = {
      employeeId: '',
      basicSalary: 0,
      hra: 0,
      conveyance: 0,
      medicalAllowance: 0,
      specialAllowance: 0,
      pfPercent: 12,
      esiPercent: 0,
      tdsPercent: 0,
      professionalTax: 0,
      effectiveFrom: new Date().toISOString().slice(0, 10),
      effectiveTo: ''
    };
    this.showForm = true;
  }

  openEdit(structure: SalaryStructure): void {
    this.editing = structure;
    this.form = {
      employeeId: structure.employeeId,
      basicSalary: structure.basicSalary,
      hra: structure.hra,
      conveyance: structure.conveyance,
      medicalAllowance: structure.medicalAllowance,
      specialAllowance: structure.specialAllowance,
      pfPercent: structure.pfPercent,
      esiPercent: structure.esiPercent,
      tdsPercent: structure.tdsPercent,
      professionalTax: structure.professionalTax,
      effectiveFrom: structure.effectiveFrom?.slice(0, 10),
      effectiveTo: structure.effectiveTo?.slice(0, 10) || ''
    };
    this.showForm = true;
  }

  onAction(event: { action: string; row: SalaryStructure }): void {
    if (event.action === 'edit') {
      this.openEdit(event.row);
    } else if (event.action === 'breakdown') {
      this.payrollService.getSalaryBreakdown(event.row.employeeId).subscribe({
        next: (data) => this.breakdown = data,
        error: () => this.toast.error('Failed to load salary breakdown')
      });
    } else if (event.action === 'deactivate') {
      if (confirm(`Deactivate salary structure for ${event.row.employeeName}?`)) {
        this.payrollService.deactivateSalaryStructure(event.row.id).subscribe({
          next: () => { this.toast.success('Salary structure deactivated'); this.loadStructures(); },
          error: () => this.toast.error('Failed to deactivate salary structure')
        });
      }
    }
  }

  saveStructure(): void {
    if (!this.form.employeeId || Number(this.form.basicSalary) <= 0) {
      this.toast.error('Employee and basic salary are required');
      return;
    }
    const totals = this.computeTotals();
    this.payrollService.saveSalaryStructure({
      ...this.form,
      totalEarnings: totals.gross,
      totalDeductions: totals.deductions,
      netPay: totals.net,
      id: this.editing?.id
    }).subscribe({
      next: () => {
        this.toast.success('Salary structure saved');
        this.showForm = false;
        this.loadStructures();
      },
      error: () => this.toast.error('Failed to save salary structure')
    });
  }

  closeBreakdown(): void {
    this.breakdown = null;
  }
}