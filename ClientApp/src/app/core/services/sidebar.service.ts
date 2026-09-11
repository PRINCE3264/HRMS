import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  public collapsed$ = this.collapsedSubject.asObservable();

  private mobileOpenSubject = new BehaviorSubject<boolean>(false);
  public mobileOpen$ = this.mobileOpenSubject.asObservable();

  toggle(): void {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  collapse(): void {
    this.collapsedSubject.next(true);
  }

  expand(): void {
    this.collapsedSubject.next(false);
  }

  toggleMobile(): void {
    this.mobileOpenSubject.next(!this.mobileOpenSubject.value);
  }

  closeMobile(): void {
    this.mobileOpenSubject.next(false);
  }

  get isCollapsed(): boolean {
    return this.collapsedSubject.value;
  }

  get isMobileOpen(): boolean {
    return this.mobileOpenSubject.value;
  }
}
