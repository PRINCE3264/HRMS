import { Component, Input } from '@angular/core';
import { STATUS_COLORS } from '../../../core/constants';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() status = '';
  @Input() label = '';

  get bgColor(): string {
    const color = STATUS_COLORS[this.status] || '#94a3b8';
    return color + '18';
  }

  get textColor(): string {
    return STATUS_COLORS[this.status] || '#94a3b8';
  }
}
