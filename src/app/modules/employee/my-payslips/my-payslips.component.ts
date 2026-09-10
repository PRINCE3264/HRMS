import { Component } from '@angular/core';

export interface PayslipItem {
  period: string;
  basic: string;
  allowances: string;
  deductions: string;
  netPay: string;
  status: string;
  payDate: string;
}

@Component({
  selector: 'app-emp-payslips',
  templateUrl: './my-payslips.component.html',
  styleUrls: ['./my-payslips.component.scss']
})
export class EmpPayslipsComponent {
  selectedYear = '2026';

  payslips: PayslipItem[] = [
    { period: 'September 2026', basic: '$5,500.00', allowances: '$2,000.00', deductions: '1,575.00', netPay: '$5,925.00', status: 'GENERATED', payDate: '30 Sep 2026' },
    { period: 'August 2026', basic: '$5,500.00', allowances: '$2,000.00', deductions: '1,575.00', netPay: '$5,925.00', status: 'GENERATED', payDate: '31 Aug 2026' },
    { period: 'July 2026', basic: '$5,500.00', allowances: '$2,000.00', deductions: '1,575.00', netPay: '$5,925.00', status: 'GENERATED', payDate: '31 Jul 2026' },
    { period: 'June 2026', basic: '$5,500.00', allowances: '$1,875.00', deductions: '1,500.00', netPay: '$5,875.00', status: 'GENERATED', payDate: '30 Jun 2026' },
    { period: 'May 2026', basic: '$5,500.00', allowances: '$1,875.00', deductions: '1,500.00', netPay: '$5,875.00', status: 'GENERATED', payDate: '31 May 2026' },
    { period: 'April 2026', basic: '$5,500.00', allowances: '$1,875.00', deductions: '1,500.00', netPay: '$5,875.00', status: 'GENERATED', payDate: '30 Apr 2026' },
    { period: 'March 2026', basic: '$5,500.00', allowances: '$1,750.00', deductions: '1,450.00', netPay: '$5,800.00', status: 'GENERATED', payDate: '31 Mar 2026' },
    { period: 'February 2026', basic: '$5,500.00', allowances: '$1,750.00', deductions: '1,450.00', netPay: '$5,800.00', status: 'GENERATED', payDate: '28 Feb 2026' },
    { period: 'January 2026', basic: '$5,500.00', allowances: '$1,750.00', deductions: '1,450.00', netPay: '$5,800.00', status: 'GENERATED', payDate: '31 Jan 2026' },
    { period: 'December 2025', basic: '$5,200.00', allowances: '$1,650.00', deductions: '1,400.00', netPay: '$5,450.00', status: 'GENERATED', payDate: '31 Dec 2025' },
  ];

  activePayslipModal: PayslipItem | null = null;
  showToast = false;
  toastMsg = '';

  get filteredPayslips(): PayslipItem[] {
    return this.payslips.filter(p => p.period.includes(this.selectedYear));
  }

  viewPayslipDetail(payslip: PayslipItem): void {
    this.activePayslipModal = payslip;
  }

  closePayslipDetail(): void {
    this.activePayslipModal = null;
  }

  downloadPayslip(period: string): void {
    this.triggerToast(`Downloading official payslip PDF for ${period}...`);
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

