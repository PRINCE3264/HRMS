import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService, ToastService, ExcelExportService } from '../../../core/services';

export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  avatar?: string;
  designation: string;
  department: string;
  month: string;
  basicSalary: number;
  hra: number;
  allowances: number;
  pfDeduction: number;
  taxDeduction: number;
  otherDeductions: number;
  totalDeductions: number;
  netPay: number;
  status: 'Paid' | 'Processing' | 'Pending' | 'On Hold';
  paymentDate?: string;
  paymentMethod?: string;
  selected?: boolean;
}

@Component({
  selector: 'app-admin-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class AdminPayrollComponent implements OnInit {
  payrollList: PayrollRecord[] = [];
  filteredList: PayrollRecord[] = [];

  // Filter States
  searchTerm: string = '';
  selectedStatus: string = 'All';
  selectedDepartment: string = 'All';
  selectedMonth: string = 'September 2026';

  // Available Filter Options
  departments: string[] = ['All', 'Engineering', 'Human Resources', 'Sales & Marketing', 'Finance', 'Design & UX', 'Operations'];
  months: string[] = ['September 2026', 'August 2026', 'July 2026', 'June 2026', 'May 2026'];
  statusOptions: string[] = ['All', 'Paid', 'Processing', 'Pending', 'On Hold'];

  // Table Checkbox State
  isAllSelected: boolean = false;

  // KPI Metrics
  totalGrossPay: number = 0;
  totalDeductions: number = 0;
  totalNetPay: number = 0;
  processedCount: number = 0;
  totalCount: number = 0;

  // Modals
  showRunPayrollModal: boolean = false;
  selectedPayslip: PayrollRecord | null = null;
  editingRecord: PayrollRecord | null = null;
  runPayrollMonth: string = 'September 2026';
  runPayrollDept: string = 'All';
  isProcessingPayroll: boolean = false;

  private STORAGE_KEY = 'hrm_payroll_records';

  constructor(
    private payrollService: PayrollService,
    private toast: ToastService,
    private excelExportService: ExcelExportService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPayroll();
  }

  loadPayroll(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.payrollList = JSON.parse(saved);
        this.applyFilter();
        this.calculateMetrics();
        return;
      } catch (e) {
        console.error('Error parsing stored payroll records', e);
      }
    }

    // Try service or default mock data
    this.payrollService.getPayroll({ page: 1, pageSize: 50 }).subscribe({
      next: (res) => {
        if (res && res.items && res.items.length > 0) {
          this.payrollList = res.items.map((p: any, idx: number) => ({
            id: p.id || `PAY-${1000 + idx}`,
            employeeId: p.employeeId || `EMP-${101 + idx}`,
            employeeName: p.employeeName || p.name || `Employee ${idx + 1}`,
            avatar: `https://i.pravatar.cc/150?img=${(idx % 60) + 1}`,
            designation: p.designation || 'Software Engineer',
            department: p.department || 'Engineering',
            month: this.selectedMonth,
            basicSalary: p.basicSalary || 6500,
            hra: 1800,
            allowances: p.allowances || 800,
            pfDeduction: 780,
            taxDeduction: 620,
            otherDeductions: 100,
            totalDeductions: p.deductions || 1500,
            netPay: p.netPay || 7600,
            status: p.status || (idx % 3 === 0 ? 'Paid' : idx % 3 === 1 ? 'Processing' : 'Pending'),
            paymentDate: p.paymentDate || '2026-09-01',
            paymentMethod: 'Direct Deposit',
            selected: false
          }));
        } else {
          this.initMockPayroll();
        }
        this.saveState();
        this.applyFilter();
        this.calculateMetrics();
      },
      error: () => {
        this.initMockPayroll();
        this.saveState();
        this.applyFilter();
        this.calculateMetrics();
      }
    });
  }

  initMockPayroll(): void {
    this.payrollList = [
      {
        id: 'PAY-1001',
        employeeId: 'EMP-101',
        employeeName: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        designation: 'Senior Frontend Developer',
        department: 'Engineering',
        month: 'September 2026',
        basicSalary: 8500,
        hra: 2500,
        allowances: 1200,
        pfDeduction: 1020,
        taxDeduction: 950,
        otherDeductions: 150,
        totalDeductions: 2120,
        netPay: 10080,
        status: 'Paid',
        paymentDate: '2026-09-01',
        paymentMethod: 'Bank Transfer (ACH)',
        selected: false
      },
      {
        id: 'PAY-1002',
        employeeId: 'EMP-102',
        employeeName: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        designation: 'Lead UI/UX Designer',
        department: 'Design & UX',
        month: 'September 2026',
        basicSalary: 7800,
        hra: 2200,
        allowances: 1000,
        pfDeduction: 936,
        taxDeduction: 840,
        otherDeductions: 120,
        totalDeductions: 1896,
        netPay: 9104,
        status: 'Paid',
        paymentDate: '2026-09-01',
        paymentMethod: 'Bank Transfer (ACH)',
        selected: false
      },
      {
        id: 'PAY-1003',
        employeeId: 'EMP-103',
        employeeName: 'Michael Chang',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        designation: 'DevOps Architect',
        department: 'Engineering',
        month: 'September 2026',
        basicSalary: 9200,
        hra: 2600,
        allowances: 1400,
        pfDeduction: 1104,
        taxDeduction: 1150,
        otherDeductions: 200,
        totalDeductions: 2454,
        netPay: 10746,
        status: 'Processing',
        paymentDate: '2026-09-02',
        paymentMethod: 'Direct Deposit',
        selected: false
      },
      {
        id: 'PAY-1004',
        employeeId: 'EMP-104',
        employeeName: 'Emily Watson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        designation: 'HR Specialist',
        department: 'Human Resources',
        month: 'September 2026',
        basicSalary: 6200,
        hra: 1800,
        allowances: 800,
        pfDeduction: 744,
        taxDeduction: 550,
        otherDeductions: 100,
        totalDeductions: 1394,
        netPay: 7406,
        status: 'Paid',
        paymentDate: '2026-09-01',
        paymentMethod: 'Direct Deposit',
        selected: false
      },
      {
        id: 'PAY-1005',
        employeeId: 'EMP-105',
        employeeName: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        designation: 'Financial Analyst',
        department: 'Finance',
        month: 'September 2026',
        basicSalary: 7400,
        hra: 2000,
        allowances: 900,
        pfDeduction: 888,
        taxDeduction: 750,
        otherDeductions: 110,
        totalDeductions: 1748,
        netPay: 8552,
        status: 'Pending',
        paymentDate: 'Pending',
        paymentMethod: 'Direct Deposit',
        selected: false
      },
      {
        id: 'PAY-1006',
        employeeId: 'EMP-106',
        employeeName: 'Sophia Patel',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        designation: 'Marketing Manager',
        department: 'Sales & Marketing',
        month: 'September 2026',
        basicSalary: 8000,
        hra: 2300,
        allowances: 1100,
        pfDeduction: 960,
        taxDeduction: 890,
        otherDeductions: 150,
        totalDeductions: 2000,
        netPay: 9400,
        status: 'On Hold',
        paymentDate: 'On Hold',
        paymentMethod: 'Check',
        selected: false
      },
      {
        id: 'PAY-1007',
        employeeId: 'EMP-107',
        employeeName: 'Robert Martinez',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
        designation: 'Operations Coordinator',
        department: 'Operations',
        month: 'September 2026',
        basicSalary: 5900,
        hra: 1600,
        allowances: 700,
        pfDeduction: 708,
        taxDeduction: 490,
        otherDeductions: 80,
        totalDeductions: 1278,
        netPay: 6922,
        status: 'Paid',
        paymentDate: '2026-09-01',
        paymentMethod: 'Direct Deposit',
        selected: false
      }
    ];
  }

  saveState(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.payrollList));
  }

  calculateMetrics(): void {
    this.totalCount = this.payrollList.length;
    this.totalGrossPay = this.payrollList.reduce((acc, r) => acc + (r.basicSalary + r.hra + r.allowances), 0);
    this.totalDeductions = this.payrollList.reduce((acc, r) => acc + r.totalDeductions, 0);
    this.totalNetPay = this.payrollList.reduce((acc, r) => acc + r.netPay, 0);
    this.processedCount = this.payrollList.filter(r => r.status === 'Paid' || r.status === 'Processing').length;
  }

  applyFilter(): void {
    let list = [...this.payrollList];

    if (this.selectedMonth) {
      list = list.filter(r => r.month === this.selectedMonth);
    }

    if (this.selectedStatus && this.selectedStatus !== 'All') {
      list = list.filter(r => r.status === this.selectedStatus);
    }

    if (this.selectedDepartment && this.selectedDepartment !== 'All') {
      list = list.filter(r => r.department === this.selectedDepartment);
    }

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase().trim();
      list = list.filter(r =>
        r.employeeName.toLowerCase().includes(q) ||
        r.employeeId.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q) ||
        r.designation.toLowerCase().includes(q)
      );
    }

    this.filteredList = list;
    this.checkIfAllSelected();
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  onFilterStatus(status: string): void {
    this.selectedStatus = status;
    this.applyFilter();
  }

  onDepartmentChange(): void {
    this.applyFilter();
  }

  onMonthChange(): void {
    this.applyFilter();
  }

  // Row Selection logic
  toggleSelectAll(): void {
    this.isAllSelected = !this.isAllSelected;
    this.filteredList.forEach(r => r.selected = this.isAllSelected);
  }

  toggleRowSelection(record: PayrollRecord): void {
    record.selected = !record.selected;
    this.checkIfAllSelected();
  }

  checkIfAllSelected(): void {
    if (this.filteredList.length === 0) {
      this.isAllSelected = false;
      return;
    }
    this.isAllSelected = this.filteredList.every(r => r.selected);
  }

  getSelectedCount(): number {
    return this.payrollList.filter(r => r.selected).length;
  }

  clearSelection(): void {
    this.payrollList.forEach(r => r.selected = false);
    this.isAllSelected = false;
  }

  // Batch Actions
  exportSelectedToExcel(): void {
    const selectedRows = this.payrollList.filter(r => r.selected);
    const dataToExport = selectedRows.length > 0 ? selectedRows : this.filteredList;

    if (dataToExport.length === 0) {
      this.toast.error('No payroll data available to export');
      return;
    }

    const exportData = dataToExport.map(r => ({
      'Payroll ID': r.id,
      'Employee Code': r.employeeId,
      'Employee Name': r.employeeName,
      'Designation': r.designation,
      'Department': r.department,
      'Month': r.month,
      'Basic Salary (₹)': r.basicSalary,
      'HRA (₹)': r.hra,
      'Allowances (₹)': r.allowances,
      'Gross Salary (₹)': r.basicSalary + r.hra + r.allowances,
      'PF Deduction (₹)': r.pfDeduction,
      'Tax Deduction (₹)': r.taxDeduction,
      'Other Deductions (₹)': r.otherDeductions,
      'Total Deductions (₹)': r.totalDeductions,
      'Net Pay (₹)': r.netPay,
      'Status': r.status,
      'Payment Date': r.paymentDate || 'N/A',
      'Payment Method': r.paymentMethod || 'N/A'
    }));


    const fileName = selectedRows.length > 0 ? `Payroll_Selected_${this.selectedMonth}` : `Payroll_Full_${this.selectedMonth}`;
    this.excelExportService.exportToExcel(exportData, fileName);
    this.toast.success(`Exported ${exportData.length} payroll records to Excel!`);
  }

  batchMarkAsPaid(): void {
    const selected = this.payrollList.filter(r => r.selected);
    if (selected.length === 0) {
      this.toast.error('Please select at least one employee row');
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    selected.forEach(r => {
      r.status = 'Paid';
      r.paymentDate = today;
    });

    this.saveState();
    this.calculateMetrics();
    this.applyFilter();
    this.toast.success(`Marked ${selected.length} employees as Paid!`);
  }

  // Row Actions
  openPayslipModal(record: PayrollRecord): void {
    this.selectedPayslip = record;
  }

  closePayslipModal(): void {
    this.selectedPayslip = null;
  }

  printPayslip(): void {
    window.print();
  }

  openEditSalaryModal(record: PayrollRecord): void {
    this.editingRecord = { ...record };
  }

  closeEditSalaryModal(): void {
    this.editingRecord = null;
  }

  recalculateEditingNetPay(): void {
    if (!this.editingRecord) return;
    const gross = Number(this.editingRecord.basicSalary || 0) + Number(this.editingRecord.hra || 0) + Number(this.editingRecord.allowances || 0);
    const deductions = Number(this.editingRecord.pfDeduction || 0) + Number(this.editingRecord.taxDeduction || 0) + Number(this.editingRecord.otherDeductions || 0);
    this.editingRecord.totalDeductions = deductions;
    this.editingRecord.netPay = gross - deductions;
  }

  saveEditedSalary(): void {
    if (!this.editingRecord) return;
    this.recalculateEditingNetPay();

    const idx = this.payrollList.findIndex(r => r.id === this.editingRecord!.id);
    if (idx !== -1) {
      this.payrollList[idx] = { ...this.editingRecord };
      this.saveState();
      this.calculateMetrics();
      this.applyFilter();
      this.toast.success(`Updated salary structure for ${this.editingRecord.employeeName}`);
    }
    this.closeEditSalaryModal();
  }

  togglePaymentStatus(record: PayrollRecord): void {
    if (record.status === 'Paid') {
      record.status = 'Pending';
      record.paymentDate = 'Pending';
    } else {
      record.status = 'Paid';
      record.paymentDate = new Date().toISOString().slice(0, 10);
    }
    this.saveState();
    this.calculateMetrics();
    this.applyFilter();
    this.toast.success(`Updated payment status for ${record.employeeName} to ${record.status}`);
  }

  // Run Payroll Modal
  openRunPayrollModal(): void {
    this.showRunPayrollModal = true;
  }

  closeRunPayrollModal(): void {
    this.showRunPayrollModal = false;
  }

  executeRunPayroll(): void {
    this.isProcessingPayroll = true;
    setTimeout(() => {
      const today = new Date().toISOString().slice(0, 10);
      this.payrollList.forEach(r => {
        if (r.status === 'Pending' || r.status === 'Processing') {
          r.status = 'Paid';
          r.paymentDate = today;
        }
      });
      this.saveState();
      this.calculateMetrics();
      this.applyFilter();
      this.isProcessingPayroll = false;
      this.showRunPayrollModal = false;
      this.toast.success(`Payroll successfully processed for ${this.runPayrollMonth}!`);
    }, 1200);
  }

  // Navigation helpers
  goToSalaryStructures(): void {
    this.router.navigate(['/admin/payroll/salary-structures']);
  }

  goToReports(): void {
    this.router.navigate(['/admin/payroll/reports']);
  }
}

