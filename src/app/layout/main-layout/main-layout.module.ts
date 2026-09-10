import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, SidebarModule, NavbarModule],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
