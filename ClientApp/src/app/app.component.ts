import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './core/interceptors/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    // Fade out initial page reload splash screen
    setTimeout(() => {
      const initLoader = document.getElementById('app-init-loader');
      if (initLoader) {
        initLoader.style.opacity = '0';
        setTimeout(() => initLoader.remove(), 300);
      }
    }, 500);

    // Show loading spinner on route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingService.startNavigation();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.endNavigation();
      }
    });
  }
}
