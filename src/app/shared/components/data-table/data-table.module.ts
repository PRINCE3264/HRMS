import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table.component';
import { StatusBadgeModule } from '../status-badge/status-badge.module';
import { EmptyStateModule } from '../empty-state/empty-state.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, FormsModule, StatusBadgeModule, EmptyStateModule],
  exports: [DataTableComponent]
})
export class DataTableModule {}
