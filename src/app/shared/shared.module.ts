import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StatCardModule } from './components/stat-card/stat-card.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { StatusBadgeModule } from './components/status-badge/status-badge.module';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { ToastModule } from './components/toast/toast.module';
import { LoadingSpinnerModule } from './components/loading-spinner/loading-spinner.module';
import { EmptyStateModule } from './components/empty-state/empty-state.module';
import { DataTableModule } from './components/data-table/data-table.module';
import { SearchInputModule } from './components/search-input/search-input.module';
import { ChartBarModule } from './components/chart-bar/chart-bar.module';
import { ChartDonutModule } from './components/chart-donut/chart-donut.module';
import { ChartLineModule } from './components/chart-line/chart-line.module';
import { DrawerModule } from './components/drawer/drawer.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

const MODULES = [
  StatCardModule, PageHeaderModule, StatusBadgeModule, ConfirmDialogModule,
  ToastModule, LoadingSpinnerModule, EmptyStateModule, DataTableModule,
  SearchInputModule, ChartBarModule, ChartDonutModule, ChartLineModule,
  DrawerModule, DirectivesModule, PipesModule
];

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, ...MODULES
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, ...MODULES
  ]
})
export class SharedModule {}