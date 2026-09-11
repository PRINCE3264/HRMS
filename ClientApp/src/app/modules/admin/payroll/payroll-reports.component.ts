import { Component, OnInit } from '@angular/core';
import { PayrollService, ToastService } from '../../../core/services';
import { PayrollReport } from '../../../core/models';

@Component({
  selector: 'app-admin-payroll-reports',
  templateUrl: './payroll-reports.component.html',
  styleUrls: ['./payroll-reports.component.scss']
})
export class AdminPayrollReportsComponent implements OnInit {
  year = new Date().getFullYear();
  month = new Date().toLocaleString('en-US', { month: 'short' });
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  report: PayrollReport | null = null;
  loading = false;
  chartData: any[] = [];

  constructor(private payrollService: PayrollService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport(): void {
    this.loading = true;
    this.payrollService.getPayrollReport(this.year, this.month).subscribe({
      next: (data) => {
        this.report = data;
        this.chartData = (data.chart?.labels || []).map((label: string, i: number) => ({
          label,
          value: data.chart?.datasets?.[0]?.data?.[i] || 0,
          color: (data.chart?.datasets?.[0]?.backgroundColor as string[] | undefined)?.[i % 8] || '#6366f1'
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; this.toast.error('Failed to load payroll report'); }
    });
  }
}