import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '../../core/services/permission.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {
  private moduleName = '';
  private actionName = '';
  private isHidden = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  @Input()
  set appHasPermission(permission: string) {
    const parts = permission.split(':');
    this.moduleName = parts[0] || '';
    this.actionName = parts[1] || 'VIEW';
  }

  ngOnInit(): void {
    this.updateView();
  }

  private updateView(): void {
    const hasPermission = this.permissionService.can(this.moduleName, this.actionName as any);
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
