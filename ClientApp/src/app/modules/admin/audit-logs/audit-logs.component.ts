import { Component, OnInit } from '@angular/core';
import { ReportService, ToastService, ExcelExportService } from '../../../core/services';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-admin-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.scss']
})
export class AdminAuditLogsComponent implements OnInit {
  columns: TableColumn[] = [
    { key: 'timestamp', label: 'Timestamp', sortable: true, width: '180px' },
    { key: 'user', label: 'User', sortable: true },
    { key: 'module', label: 'Module', sortable: true },
    { key: 'action', label: 'Action', sortable: true },
    { key: 'description', label: 'Description' },
    { key: 'ipAddress', label: 'IP Address' },
    { key: 'status', label: 'Status', type: 'status' }
  ];
  tableActions = [
    { label: 'Details', icon: 'fas fa-info-circle', action: 'details', color: '#3b82f6' }
  ];
  logs: any[] = [];

  constructor(
    private reportService: ReportService,
    private toast: ToastService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  exportLogs(): void {
    if (this.logs && this.logs.length > 0) {
      this.excelExport.exportToExcel(this.logs, 'Audit_Logs');
    } else {
      this.toast.error('No log data available to export');
    }
  }

  loadLogs(): void {
    this.reportService.getAuditLogs().subscribe({
      next: (data) => this.logs = data.map((l: any) => ({
        timestamp: l.timestamp,
        user: l.userName,
        module: l.module,
        action: l.action,
        description: l.details,
        ipAddress: l.ipAddress,
        status: l.action === 'DELETE' ? 'SUCCESS' : l.action
      })),
      error: () => this.toast.error('Failed to load audit logs')
    });
  }

  onAction(event: { action: string; row: any }): void {
    console.log(event.action, event.row);
  }
}