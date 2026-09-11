import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value: number | string = 0;
  @Input() icon = 'fas fa-chart-line';
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' = 'primary';
  @Input() change?: number;
  @Input() prefix = '';
  @Input() suffix = '';
}
