import { Component, OnInit } from '@angular/core';
import { PayrollService, ToastService } from '../../../core/services';

export interface PayslipItem {
  period: string;
  basic: string;
  allowances: string;
  deductions: string;
  netPay: string;
  status: string;
  payDate: string;
  slip?: any;
}

@Component({
  selector: 'app-emp-payslips',
  templateUrl: './my-payslips.component.html',
  styleUrls: ['./my-payslips.component.scss']
})
export class EmpPayslipsComponent implements OnInit {
  selectedYear = String(new Date().getFullYear());

  payslips: PayslipItem[] = [];

  activePayslipModal: PayslipItem | null = null;
  showToast = false;
  toastMsg = '';

  private monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
    private payrollService: PayrollService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadPayslips();
  }

  private loadPayslips(): void {
    this.payrollService.getMyPayroll().subscribe({
      next: records => {
        if (records && records.length > 0) {
          this.payslips = records.map(r => ({
            period: `${this.monthName(r.month)} ${r.year}`,
            basic: this.formatMoney(r.basicSalary),
            allowances: this.formatMoney(r.allowances),
            deductions: '₹' + (Number(r.deductions) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 }),
            netPay: this.formatMoney(r.netPay),
            status: r.status,
            payDate: this.formatDate(r.paidDate)
          }));
        } else {
          this.setDemoPayslips();
        }
      },
      error: () => {
        this.setDemoPayslips();
      }
    });
  }

  private setDemoPayslips(): void {
    this.payslips = [
      { period: 'September 2026', basic: '₹45,000.00', allowances: '₹30,000.00', deductions: '₹15,750.00', netPay: '₹59,250.00', status: 'PAID', payDate: '30 Sep 2026' },
      { period: 'August 2026', basic: '₹45,000.00', allowances: '₹30,000.00', deductions: '₹15,750.00', netPay: '₹59,250.00', status: 'PAID', payDate: '31 Aug 2026' },
      { period: 'July 2026', basic: '₹45,000.00', allowances: '₹30,000.00', deductions: '₹15,750.00', netPay: '₹59,250.00', status: 'PAID', payDate: '31 Jul 2026' },
      { period: 'June 2026', basic: '₹45,000.00', allowances: '₹30,000.00', deductions: '₹15,750.00', netPay: '₹59,250.00', status: 'PAID', payDate: '30 Jun 2026' }
    ];
  }

  private monthName(value: any): string {
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'number') {
      return this.monthNames[(value - 1) % 12] || String(value);
    }
    const n = parseInt(String(value), 10);
    if (!isNaN(n)) {
      return this.monthNames[(n - 1) % 12] || String(value);
    }
    return String(value);
  }

  private formatMoney(value?: number): string {
    return '₹' + (Number(value) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  private formatDate(value?: string): string {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  get filteredPayslips(): PayslipItem[] {
    return this.payslips.filter(p => p.period.includes(this.selectedYear));
  }

  viewPayslipDetail(payslip: PayslipItem): void {
    this.activePayslipModal = payslip;
    const parts = payslip.period.split(' ');
    if (parts.length >= 2) {
      const month = this.monthName(parts[0]);
      const year = Number(parts[parts.length - 1]);
      if (month && !isNaN(year)) {
        this.payrollService.getMyPayslip(month, year).subscribe({
          next: slip => {
            if (this.activePayslipModal) {
              this.activePayslipModal.slip = slip;
              this.activePayslipModal.netPay = this.formatMoney(slip.netPay);
              this.activePayslipModal.basic = this.formatMoney(slip.basicSalary);
              this.activePayslipModal.allowances = this.formatMoney(slip.totalEarnings - slip.basicSalary);
              this.activePayslipModal.deductions = '₹' + (slip.totalDeductions || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 });
            }
          },
          error: () => undefined
        });
      }
    }
  }

  closePayslipDetail(): void {
    this.activePayslipModal = null;
  }

  downloadPayslip(period: string): void {
    this.toast.success(`Downloading official payslip PDF for ${period}...`);
  }

  printPayslip(): void {
    window.print();
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}