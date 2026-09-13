import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [CommonModule, RouterModule],
  exports: [UnauthorizedComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnauthorizedModule {}

