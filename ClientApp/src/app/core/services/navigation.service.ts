import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from '../models';
import { NavigationModule } from '../models/navigation.model';
import { environment } from '../../../environments/environment';

export interface NavItem {
  label: string;
  icon: string;
  routerLink?: string;
  queryParams?: { [key: string]: any };
  module?: string;
  roles?: UserRole[];
  children?: NavItem[];
}

function normalizePath(path: string): string {
  return (path || '').replace(/^\/+|\/+$/g, '');
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private apiUrl = environment.apiBaseUrl;
  private menuSnapshot: NavigationModule[] | null = null;

  constructor(private http: HttpClient) {}

  getMenu(): Observable<NavigationModule[]> {
    return this.http.get<NavigationModule[]>(`${this.apiUrl}/navigation/menu`).pipe(
      map(modules => {
        this.menuSnapshot = modules;
        return modules;
      })
    );
  }

  /** Loads the role-wise menu without relying on the HTTP interceptor (used during app bootstrap). */
  preloadMenu(token?: string | null): Promise<NavigationModule[]> {
    if (this.menuSnapshot) {
      return Promise.resolve(this.menuSnapshot);
    }
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
    return firstValueFrom(
      this.http.get<NavigationModule[]>(`${this.apiUrl}/navigation/menu`, { headers })
    ).then(modules => {
      this.menuSnapshot = modules ?? [];
      return this.menuSnapshot;
    }).catch(() => {
      this.menuSnapshot = [];
      return this.menuSnapshot;
    });
  }

  getMenuSnapshot(): NavigationModule[] | null {
    return this.menuSnapshot;
  }

  getFeatureByPath(path: string): NavigationModule['features'][number] | undefined {
    if (!this.menuSnapshot) return undefined;
    const target = normalizePath(path);
    for (const module of this.menuSnapshot) {
      const found = module.features.find(f => normalizePath(f.path) === target);
      if (found) return found;
    }
    return undefined;
  }

  getNavItemsFromDb(): Observable<NavItem[]> {
    return this.getMenu().pipe(
      map(modules => {
        return modules.map(m => {
          // If the module has only one feature, flatten it to a single menu item
          if (m.features && m.features.length === 1) {
            return {
              label: m.features[0].name,
              icon: m.features[0].icon || m.icon || 'fas fa-circle',
              routerLink: m.features[0].path,
              module: m.name
            } as NavItem;
          }

          // Otherwise, create a menu item with children
          const navItem: NavItem = {
            label: m.name,
            icon: m.icon || 'fas fa-circle',
            module: m.name,
            children: m.features.map(f => ({
              label: f.name,
              icon: f.icon || 'fas fa-circle',
              routerLink: f.path
            }))
          };
          return navItem;
        });
      })
    );
  }
}