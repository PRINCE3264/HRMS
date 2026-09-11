import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission.directive';
import { ClickOutsideDirective } from './click-outside.directive';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [HasPermissionDirective, ClickOutsideDirective, AutofocusDirective],
  imports: [CommonModule],
  exports: [HasPermissionDirective, ClickOutsideDirective, AutofocusDirective]
})
export class DirectivesModule {}
