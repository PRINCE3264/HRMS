import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  collapsed = false;
  constructor(private sidebarService: SidebarService) {
    this.sidebarService.collapsed$.subscribe(v => this.collapsed = v);
  }
}
