import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NavigationService } from './navigation.service';
import { DynamicFeatureComponent } from '../components/dynamic-feature/dynamic-feature.component';
import { NavigationFeature } from '../models/navigation.model';
import { STATIC_FEATURE_PATHS } from '../constants/routes.constants';

function normalizePath(path: string): string {
  return (path || '').replace(/^\/+|\/+$/g, '');
}

@Injectable({ providedIn: 'root' })
export class DynamicRouteService {
  private registeredPaths = new Set<string>();

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  /** Loads the role-wise menu and registers routes for DB features. */
  async initialize(): Promise<void> {
    const token = sessionStorage.getItem('hrm_token') || localStorage.getItem('hrm_token');
    if (!token) return;
    await this.navigationService.preloadMenu(token);
    this.registerRoutes();
  }

  /** Builds and prepends routes for every feature present in the DB menu
   *  that is not already covered by a static route in app-routing.module.ts. */
  registerRoutes(): void {
    const features = this.getUnregisteredFeatures();
    if (!features.length) return;

    const dynamicRoutes: Route[] = features.map(f => ({
      path: normalizePath(f.path),
      canActivate: [AuthGuard],
      component: DynamicFeatureComponent,
      data: {
        featureName: f.name,
        featurePath: f.path,
        featureIcon: f.icon
      }
    }));

    const existing = new Set(
      this.router.config
        .map(r => normalizePath(r.path ?? ''))
        .filter(Boolean)
    );
    const fresh = dynamicRoutes.filter(r => !existing.has(r.path ?? ''));

    if (!fresh.length) return;
    fresh.forEach(r => {
      if (r.path) {
        this.registeredPaths.add(r.path);
        existing.add(r.path);
      }
    });
    this.router.resetConfig([...fresh, ...this.router.config]);
  }

  private getUnregisteredFeatures(): NavigationFeature[] {
    const menu = this.navigationService.getMenuSnapshot();
    if (!menu) return [];

    const seen = new Set<string>();
    const result: NavigationFeature[] = [];
    for (const module of menu) {
      if (!module.isActive) continue;
      for (const feature of module.features) {
        if (!feature.isActive || !feature.path) continue;
        const normalized = normalizePath(feature.path);
        if (!normalized) continue;
        if (STATIC_FEATURE_PATHS.includes(normalized)) continue;
        if (seen.has(normalized)) continue;
        if (this.registeredPaths.has(normalized)) continue;
        seen.add(normalized);
        result.push(feature);
      }
    }
    return result;
  }
}