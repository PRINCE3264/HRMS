import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService, EmployeeService, ToastService, ExcelExportService } from '../../../core/services';
import { SalaryStructure } from '../../../core/models';

export interface ExtendedSalaryStructure extends SalaryStructure {
  avatar?: string;
  department?: string;
  designation?: string;
  status?: string;
  selected?: boolean;
}


@Component({
  selector: 'app-admin-salary-structures',
  templateUrl: './salary-structures.component.html',
  styleUrls: ['./salary-structures.component.scss']
})
export class AdminSalaryStructuresComponent implements OnInit {
  structures: ExtendedSalaryStructure[] = [];
  filteredStructures: ExtendedSalaryStructure[] = [];
  employees: any[] = [];

  // Filters
  search: string = '';
  selectedDepartment: string = 'All';
  selectedStatus: string = 'All';
  departments: string[] = ['All', 'Engineering', 'Design & UX', 'Human Resources', 'Finance', 'Sales & Marketing', 'Operations'];
  statusOptions: string[] = ['All', 'Active', 'Draft', 'Inactive'];

  // Checkbox State
  isAllSelected: boolean = false;

  // Form & Drawer State
  showForm: boolean = false;
  editing: ExtendedSalaryStructure | null = null;
  breakdown: any = null;

  // KPI Metrics
  totalStructuresCount: number = 0;
  avgBasicSalary: number = 0;
  avgGrossSalary: number = 0;
  activeCount: number = 0;

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

  private STORAGE_KEY = 'hrm_salary_structures';

  constructor(
    private payrollService: PayrollService,
    private employeeService: EmployeeService,
    private toast: ToastService,
    private excelExportService: ExcelExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStructures();
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.employees = data;
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

  loadStructures(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.structures = JSON.parse(saved);
        this.applyFilter();
        this.calculateMetrics();
        return;
      } catch (e) {
        console.error('Error parsing stored structures', e);
      }
    }

    this.payrollService.getSalaryStructures({ page: 1, pageSize: 50 }).subscribe({
      next: (res) => {
        if (res && res.items && res.items.length > 0) {
          this.structures = res.items.map((s: any) => ({
            ...s,
            avatar: `https://i.pravatar.cc/150?u=${s.employeeId}`,
            department: s.department || 'Engineering',
            designation: s.designation || 'Specialist',
            selected: false
          }));
        } else {
          this.initMockStructures();
        }
        this.saveState();
        this.applyFilter();
        this.calculateMetrics();
      },
      error: () => {
        this.initMockStructures();
        this.saveState();
        this.applyFilter();
        this.calculateMetrics();
      }
    });
  }

  initMockStructures(): void {
    this.structures = [
      {
        id: 'SS-1001',
        employeeId: 'EMP-101',
        employeeCode: 'EMP-101',
        employeeName: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        department: 'Engineering',
        designation: 'Senior Frontend Developer',
        basicSalary: 8500,
        hra: 2500,
        conveyance: 400,
        medicalAllowance: 300,
        specialAllowance: 500,
        pfPercent: 12,
        esiPercent: 1.75,
        tdsPercent: 10,
        professionalTax: 150,
        totalEarnings: 12200,
        totalDeductions: 2280,
        netPay: 9920,
        effectiveFrom: '2026-01-01',
        isActive: true,
        status: 'Active',
        selected: false
      },
      {
        id: 'SS-1002',
        employeeId: 'EMP-102',
        employeeCode: 'EMP-102',
        employeeName: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        department: 'Design & UX',
        designation: 'Lead UI/UX Designer',
        basicSalary: 7800,
        hra: 2200,
        conveyance: 350,
        medicalAllowance: 250,
        specialAllowance: 400,
        pfPercent: 12,
        esiPercent: 1.75,
        tdsPercent: 10,
        professionalTax: 150,
        totalEarnings: 11000,
        totalDeductions: 2050,
        netPay: 8950,
        effectiveFrom: '2026-01-01',
        isActive: true,
        status: 'Active',
        selected: false
      },
      {
        id: 'SS-1003',
        employeeId: 'EMP-103',
        employeeCode: 'EMP-103',
        employeeName: 'Michael Chang',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        department: 'Engineering',
        designation: 'DevOps Architect',
        basicSalary: 9200,
        hra: 2600,
        conveyance: 400,
        medicalAllowance: 350,
        specialAllowance: 650,
        pfPercent: 12,
        esiPercent: 1.75,
        tdsPercent: 12,
        professionalTax: 200,
        totalEarnings: 13200,
        totalDeductions: 2580,
        netPay: 10620,
        effectiveFrom: '2026-02-01',
        isActive: true,
        status: 'Active',
        selected: false
      },
      {
        id: 'SS-1004',
        employeeId: 'EMP-104',
        employeeCode: 'EMP-104',
        employeeName: 'Emily Watson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        department: 'Human Resources',
        designation: 'HR Specialist',
        basicSalary: 6200,
        hra: 1800,
        conveyance: 300,
        medicalAllowance: 200,
        specialAllowance: 300,
        pfPercent: 12,
        esiPercent: 1.75,
        tdsPercent: 8,
        professionalTax: 100,
        totalEarnings: 8800,
        totalDeductions: 1540,
        netPay: 7260,
        effectiveFrom: '2026-03-01',
        isActive: false,
        status: 'Draft',
        selected: false
      },
      {
        id: 'SS-1005',
        employeeId: 'EMP-105',
        employeeCode: 'EMP-105',
        employeeName: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        department: 'Finance',
        designation: 'Financial Analyst',
        basicSalary: 7400,
        hra: 2000,
        conveyance: 350,
        medicalAllowance: 250,
        specialAllowance: 300,
        pfPercent: 12,
        esiPercent: 1.75,
        tdsPercent: 10,
        professionalTax: 150,
        totalEarnings: 10300,
        totalDeductions: 1950,
        netPay: 8350,
        effectiveFrom: '2026-01-15',
        isActive: true,
        status: 'Active',
        selected: false
      }
    ];
  }

  saveState(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.structures));
  }

  calculateMetrics(): void {
    this.totalStructuresCount = this.structures.length;
    if (this.structures.length > 0) {
      this.avgBasicSalary = this.structures.reduce((sum, s) => sum + s.basicSalary, 0) / this.structures.length;
      this.avgGrossSalary = this.structures.reduce((sum, s) => sum + (s.totalEarnings || (s.basicSalary + s.hra)), 0) / this.structures.length;
    } else {
      this.avgBasicSalary = 0;
      this.avgGrossSalary = 0;
    }
    this.activeCount = this.structures.filter(s => s.status === 'Active' || s.status === 'ACTIVE').length;
  }

  applyFilter(): void {
    let list = [...this.structures];

    if (this.selectedDepartment && this.selectedDepartment !== 'All') {
      list = list.filter(s => s.department === this.selectedDepartment);
    }

    if (this.selectedStatus && this.selectedStatus !== 'All') {
      list = list.filter(s => s.status === this.selectedStatus);
    }

    if (this.search.trim()) {
      const q = this.search.toLowerCase().trim();
      list = list.filter(s =>
        (s.employeeName && s.employeeName.toLowerCase().includes(q)) ||
        (s.employeeCode && s.employeeCode.toLowerCase().includes(q)) ||
        (s.department && s.department.toLowerCase().includes(q)) ||
        (s.designation && s.designation.toLowerCase().includes(q))
      );
    }

    this.filteredStructures = list;
    this.checkIfAllSelected();
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  // Row selection
  toggleSelectAll(): void {
    this.isAllSelected = !this.isAllSelected;
    this.filteredStructures.forEach(s => s.selected = this.isAllSelected);
  }

  toggleRowSelection(s: ExtendedSalaryStructure): void {
    s.selected = !s.selected;
    this.checkIfAllSelected();
  }

  checkIfAllSelected(): void {
    if (this.filteredStructures.length === 0) {
      this.isAllSelected = false;
      return;
    }
    this.isAllSelected = this.filteredStructures.every(s => s.selected);
  }

  getSelectedCount(): number {
    return this.structures.filter(s => s.selected).length;
  }

  clearSelection(): void {
    this.structures.forEach(s => s.selected = false);
    this.isAllSelected = false;
  }

  exportSelectedToExcel(): void {
    const selectedRows = this.structures.filter(s => s.selected);
    const dataToExport = selectedRows.length > 0 ? selectedRows : this.filteredStructures;

    if (dataToExport.length === 0) {
      this.toast.error('No salary structures available to export');
      return;
    }

    const exportData = dataToExport.map(s => ({
      'Structure ID': s.id,
      'Employee Code': s.employeeCode || s.employeeId,
      'Employee Name': s.employeeName,
      'Department': s.department,
      'Designation': s.designation,
      'Basic Salary ($)': s.basicSalary,
      'HRA ($)': s.hra,
      'Conveyance ($)': s.conveyance,
      'Medical Allowance ($)': s.medicalAllowance,
      'Special Allowance ($)': s.specialAllowance,
      'Gross Salary ($)': s.totalEarnings,
      'PF %': s.pfPercent,
      'ESI %': s.esiPercent,
      'TDS %': s.tdsPercent,
      'Total Deductions ($)': s.totalDeductions,
      'Net Pay ($)': s.netPay,
      'Effective From': s.effectiveFrom,
      'Status': s.status
    }));

    this.excelExportService.exportToExcel(exportData, `Salary_Structures_Export`);
    this.toast.success(`Exported ${exportData.length} salary structures to Excel!`);
  }

  computeTotals(): { gross: number; deductions: number; net: number } {
    const gross = Number(this.form.basicSalary || 0) + Number(this.form.hra || 0) + Number(this.form.conveyance || 0)
      + Number(this.form.medicalAllowance || 0) + Number(this.form.specialAllowance || 0);
    const pf = Number(this.form.basicSalary || 0) * (Number(this.form.pfPercent || 0) / 100);
    const esi = gross * (Number(this.form.esiPercent || 0) / 100);
    const tds = gross * (Number(this.form.tdsPercent || 0) / 100);
    const deductions = pf + esi + tds + Number(this.form.professionalTax || 0);
    return { gross, deductions, net: gross - deductions };
  }

  openCreate(): void {
    this.router.navigate(['/admin/payroll/salary-structures/add']);
  }

  openEdit(structure: ExtendedSalaryStructure): void {
    this.router.navigate(['/admin/payroll/salary-structures', structure.id, 'edit']);
  }

  saveStructure(): void {
    if (!this.form.employeeId || Number(this.form.basicSalary) <= 0) {
      this.toast.error('Please select an employee and specify basic salary');
      return;
    }

    const emp = this.employees.find(e => e.id === this.form.employeeId);
    const empName = emp ? `${emp.firstName} ${emp.lastName}` : (this.editing?.employeeName || 'Employee');
    const totals = this.computeTotals();

    const updatedItem: ExtendedSalaryStructure = {
      id: this.editing ? this.editing.id : `SS-${1000 + this.structures.length + 1}`,
      employeeId: this.form.employeeId,
      employeeCode: emp ? emp.id : this.form.employeeId,
      employeeName: empName,
      avatar: this.editing?.avatar || `https://i.pravatar.cc/150?u=${this.form.employeeId}`,
      department: emp?.departmentName || this.editing?.department || 'Engineering',
      designation: emp?.designationName || this.editing?.designation || 'Specialist',
      basicSalary: Number(this.form.basicSalary),
      hra: Number(this.form.hra),
      conveyance: Number(this.form.conveyance),
      medicalAllowance: Number(this.form.medicalAllowance),
      specialAllowance: Number(this.form.specialAllowance),
      pfPercent: Number(this.form.pfPercent),
      esiPercent: Number(this.form.esiPercent),
      tdsPercent: Number(this.form.tdsPercent),
      professionalTax: Number(this.form.professionalTax),
      totalEarnings: totals.gross,
      totalDeductions: totals.deductions,
      netPay: totals.net,
      effectiveFrom: this.form.effectiveFrom,
      effectiveTo: this.form.effectiveTo,
      isActive: true,
      status: 'Active',
      selected: false
    };

    if (this.editing) {
      const idx = this.structures.findIndex(s => s.id === this.editing!.id);
      if (idx !== -1) this.structures[idx] = updatedItem;
    } else {
      this.structures.unshift(updatedItem);
    }

    this.saveState();
    this.calculateMetrics();
    this.applyFilter();
    this.showForm = false;
    this.toast.success(`Salary structure saved for ${empName}!`);
  }

  openBreakdown(structure: ExtendedSalaryStructure): void {
    const gross = structure.totalEarnings || (structure.basicSalary + structure.hra);
    this.breakdown = {
      employeeName: structure.employeeName,
      employeeCode: structure.employeeCode,
      designation: structure.designation,
      earnings: [
        { name: 'Basic Salary', amount: structure.basicSalary },
        { name: 'House Rent Allowance (HRA)', amount: structure.hra },
        { name: 'Conveyance Allowance', amount: structure.conveyance },
        { name: 'Medical Allowance', amount: structure.medicalAllowance },
        { name: 'Special Allowance', amount: structure.specialAllowance }
      ],
      deductions: [
        { name: `Provident Fund (${structure.pfPercent}%)`, amount: structure.basicSalary * (structure.pfPercent / 100) },
        { name: `ESI (${structure.esiPercent}%)`, amount: gross * (structure.esiPercent / 100) },
        { name: `Income Tax - TDS (${structure.tdsPercent}%)`, amount: gross * (structure.tdsPercent / 100) },
        { name: 'Professional Tax', amount: structure.professionalTax }
      ],
      totalEarnings: gross,
      totalDeductions: structure.totalDeductions,
      netPay: structure.netPay
    };
  }

  closeBreakdown(): void {
    this.breakdown = null;
  }

  async toggleDeactivate(structure: ExtendedSalaryStructure): Promise<void> {
    const nextStatus = structure.status === 'Active' ? 'Inactive' : 'Active';
    structure.status = nextStatus;
    this.saveState();
    this.calculateMetrics();
    this.applyFilter();
    this.toast.success(`Salary structure status for ${structure.employeeName} set to ${nextStatus}`);
  }

  goToPayroll(): void {
    this.router.navigate(['/admin/payroll']);
  }
}