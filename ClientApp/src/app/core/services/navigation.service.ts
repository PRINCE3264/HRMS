import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from '../models';
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

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getNavItemsFromDb(): Observable<NavItem[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/navigation/menu`).pipe(
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
            children: m.features.map((f: any) => ({
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
