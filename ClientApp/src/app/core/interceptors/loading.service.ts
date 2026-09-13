import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private activeRequests = 0;
  private isNavigating = false;
  private navStartTime = 0;
  private navTimer: any = null;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show(): void {
    this.activeRequests++;
    this.updateState();
  }

  hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    this.updateState();
  }

  startNavigation(): void {
    if (this.navTimer) {
      clearTimeout(this.navTimer);
      this.navTimer = null;
    }
    this.isNavigating = true;
    this.navStartTime = Date.now();
    this.updateState();
  }

  endNavigation(): void {
    const MIN_NAV_TIME = 600; // Minimum 800ms visible duration for navigation clicks
    const elapsed = Date.now() - this.navStartTime;
    const remaining = Math.max(0, MIN_NAV_TIME - elapsed);

    if (this.navTimer) {
      clearTimeout(this.navTimer);
    }

    this.navTimer = setTimeout(() => {
      this.isNavigating = false;
      this.updateState();
      this.navTimer = null;
    }, remaining);
  }

  private updateState(): void {
    const shouldShow = this.activeRequests > 0 || this.isNavigating;
    if (this.loadingSubject.value !== shouldShow) {
      this.loadingSubject.next(shouldShow);
    }
  }
}
