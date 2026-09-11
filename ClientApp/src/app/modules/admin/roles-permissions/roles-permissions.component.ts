import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RolesService, ToastService } from '../../../core/services';
import { RoleDto, RoleModuleDto, RoleCatalogDto } from '../../../core/models';

interface RoleCardMeta {
  color: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-admin-roles-permissions',
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.scss']
})
export class AdminRolesPermissionsComponent implements OnInit {
  loading = false;
  roles: RoleDto[] = [];
  catalog: RoleCatalogDto = { modules: [], actions: [] };

  showPermModal = false;
  editingRole: RoleDto | null = null;
  permGrid: { [mod: string]: { [action: string]: boolean } } = {};

  private roleMetaMap: { [key: string]: RoleCardMeta } = {
    ADMIN: {
      color: 'linear-gradient(135deg, #ef4444, #b91c1c)',
      icon: 'fas fa-crown',
      description: 'Full system access with all administrative privileges and system configuration control.'
    },
    HR: {
      color: 'linear-gradient(135deg, #4461f6, #1e40af)',
      icon: 'fas fa-user-shield',
      description: 'Human resources administration including employee management, leave, and payroll access.'
    },
    TL: {
      color: 'linear-gradient(135deg, #06b6d4, #0e7490)',
      icon: 'fas fa-users-cog',
      description: 'Limited management access for team coordination, task assignment, and attendance.'
    },
    EMPLOYEE: {
      color: 'linear-gradient(135deg, #10b981, #047857)',
      icon: 'fas fa-user',
      description: 'Basic employee access for self-service portal, profile updates, and leave applications.'
    }
  };

  private defaultMeta: RoleCardMeta = {
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    icon: 'fas fa-shield-alt',
    description: ''
  };

  constructor(
    private rolesService: RolesService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    forkJoin({
      roles: this.rolesService.getRoles(),
      catalog: this.rolesService.getCatalog()
    }).subscribe({
      next: ({ roles, catalog }) => {
        this.roles = roles;
        this.catalog = catalog;
        this.loading = false;
      },
      error: () => {
        this.toast.error('Failed to load roles.');
        this.loading = false;
      }
    });
  }

  getRoleMeta(roleName: string): RoleCardMeta {
    return this.roleMetaMap[roleName] || this.defaultMeta;
  }

  getPermissionCount(role: RoleDto): number {
    return role.permissions.reduce((sum, p) => sum + p.actions.length, 0);
  }

  get totalPermissionGrants(): number {
    return this.roles.reduce((sum, r) => sum + this.getPermissionCount(r), 0);
  }

  openPermModal(role: RoleDto): void {
    this.editingRole = role;
    this.permGrid = {};
    for (const mod of this.catalog.modules) {
      this.permGrid[mod] = {};
      const found = role.permissions.find(p => p.module === mod);
      for (const action of this.catalog.actions) {
        this.permGrid[mod][action] = found ? found.actions.includes(action as any) : false;
      }
    }
    this.showPermModal = true;
  }

  closePermModal(): void {
    this.showPermModal = false;
    this.editingRole = null;
    this.permGrid = {};
  }

  savePermissions(): void {
    if (!this.editingRole) return;
    const perms: RoleModuleDto[] = [];
    for (const mod of this.catalog.modules) {
      const actions: string[] = [];
      for (const action of this.catalog.actions) {
        if (this.permGrid[mod]?.[action]) {
          actions.push(action);
        }
      }
      if (actions.length > 0) {
        perms.push({ module: mod, actions: actions as any });
      }
    }
    this.rolesService.updateRolePermissions(this.editingRole.role, perms).subscribe({
      next: () => {
        this.toast.success('Role permissions updated.');
        this.closePermModal();
        this.reloadRoles();
      },
      error: () => {
        this.toast.error('Failed to update role permissions.');
      }
    });
  }

  resetPermissions(): void {
    if (!this.editingRole) return;
    this.rolesService.resetRolePermissions(this.editingRole.role).subscribe({
      next: () => {
        this.toast.success('Role permissions reset to defaults.');
        this.closePermModal();
        this.reloadRoles();
      },
      error: () => {
        this.toast.error('Failed to reset role permissions.');
      }
    });
  }

  private reloadRoles(): void {
    this.rolesService.getRoles().subscribe({
      next: (roles) => { this.roles = roles; },
      error: () => { this.toast.error('Failed to load roles.'); }
    });
  }
}
