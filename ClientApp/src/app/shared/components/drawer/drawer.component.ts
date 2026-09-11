import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() width = 480;
  @Input() showFooter = false;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  close(): void { this.closed.emit(); }
  save(): void { this.saved.emit(); }
}
