import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { SidebarService } from '../../core/services/sidebar.service';
import { NavigationService, NavItem } from '../../core/services/navigation.service';
import { UserRole } from '../../core/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  collapsed = false;
  mobileOpen = false;
  expandedMenus = new Set<string>();
  navItems: NavItem[] = [];
  user: any;
  roleLabel = '';
  isAdmin = false;
  private subs: Subscription[] = [];

  showLogoutModal = false;

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.sidebarService.collapsed$.subscribe(v => this.collapsed = v),
      this.sidebarService.mobileOpen$.subscribe(v => this.mobileOpen = v),
      this.authService.currentUser$.subscribe(user => {
        this.user = user;
        if (user) {
          this.navItems = this.navigationService.getNavItems(user.role);
          this.isAdmin = user.role === UserRole.ADMIN;
          this.roleLabel = user.role;
        }
      }),
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
        this.sidebarService.closeMobile();
      })
    );
  }

  ngOnDestroy(): void { this.subs.forEach(s => s.unsubscribe()); }

  toggle(): void { this.sidebarService.toggle(); }
  closeMobile(): void { this.sidebarService.closeMobile(); }
  toggleSubmenu(label: string): void {
    if (this.expandedMenus.has(label)) { this.expandedMenus.delete(label); }
    else { this.expandedMenus.add(label); }
  }

  confirmLogout(): void {
    this.showLogoutModal = true;
  }

  cancelLogout(): void {
    this.showLogoutModal = false;
  }

  performLogout(): void {
    this.showLogoutModal = false;
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
