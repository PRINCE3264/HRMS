import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() icon = 'fas fa-inbox';
  @Input() title = 'No data found';
  @Input() message = 'There is nothing to display here yet.';
  @Input() actionText = '';
  @Input() actionIcon = '';
  @Output() actionClick = new EventEmitter<void>();
}
