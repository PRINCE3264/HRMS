import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @Input() isOpen = false;
  @Input() title = 'Confirm';
  @Input() message = 'Are you sure?';
  @Input() confirmText = 'Confirm';
  @Input() type: 'danger' | 'warning' | 'info' | 'success' = 'danger';
  @Input() loading = false;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  get iconClass(): string {
    const icons: Record<string, string> = { danger: 'fas fa-trash-alt', warning: 'fas fa-exclamation-triangle', info: 'fas fa-info-circle', success: 'fas fa-check' };
    return icons[this.type] || icons['info'];
  }

  get confirmBtnClass(): string {
    const classes: Record<string, string> = { danger: 'btn btn--danger', warning: 'btn btn--primary', info: 'btn btn--primary', success: 'btn btn--primary' };
    return classes[this.type] || 'btn btn--primary';
  }

  onConfirm(): void { this.confirmed.emit(); }
  onCancel(): void { this.cancelled.emit(); }
}
