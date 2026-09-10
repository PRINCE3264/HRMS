import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusLabel' })
export class StatusLabelPipe implements PipeTransform {
  private labels: Record<string, string> = {
    ACTIVE: 'Active', INACTIVE: 'Inactive', PENDING: 'Pending', APPROVED: 'Approved',
    REJECTED: 'Rejected', PRESENT: 'Present', ABSENT: 'Absent', LATE: 'Late',
    HALF_DAY: 'Half Day', ON_LEAVE: 'On Leave', HOLIDAY: 'Holiday', WEEK_OFF: 'Week Off',
    PAID: 'Paid', DRAFT: 'Draft', PROCESSED: 'Processed', COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress', TODO: 'To Do', BLOCKED: 'Blocked', NYC: 'New',
    CANCELLED: 'Cancelled'
  };

  transform(value: string): string {
    return this.labels[value] || value || '';
  }
}
