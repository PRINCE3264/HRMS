import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableColumn } from '../../../core/models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = 10;
  @Input() selectable = false;
  @Input() showHeader = true;
  @Input() emptyTitle = 'No data found';
  @Input() emptyMessage = 'There are no records to display.';
  @Input() emptyIcon = 'fas fa-inbox';
  @Input() actions: { label: string; icon: string; color?: string; action: string }[] = [];

  @Output() onRowClick = new EventEmitter<any>();
  @Output() onActionClick = new EventEmitter<{ action: string; row: any }>();
  @Output() onSelectionChange = new EventEmitter<any[]>();

  searchTerm = '';
  sortKey = '';
  sortDir: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  filteredData: any[] = [];
  pagedData: any[] = [];
  selectedItems = new Set<any>();

  get totalItems(): number { return this.filteredData.length; }
  get totalPages(): number { return Math.ceil(this.totalItems / this.pageSize); }
  get startIndex(): number { return (this.currentPage - 1) * this.pageSize; }
  get endIndex(): number { return Math.min(this.startIndex + this.pageSize, this.totalItems); }
  get allSelected(): boolean { return this.pagedData.length > 0 && this.pagedData.every(r => this.selectedItems.has(r)); }
  get visiblePages(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  ngOnInit(): void { this.applyFilters(); }
  ngOnChanges(changes: SimpleChanges): void { if (changes['data']) this.applyFilters(); }

  onSearch(): void { this.currentPage = 1; this.applyFilters(); }

  onSort(col: TableColumn): void {
    if (!col.sortable) return;
    if (this.sortKey === col.key) { this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc'; }
    else { this.sortKey = col.key; this.sortDir = 'asc'; }
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...(this.data || [])];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(row => Object.values(row).some(v => String(v).toLowerCase().includes(term)));
    }
    if (this.sortKey) {
      result.sort((a: any, b: any) => {
        const aVal = a[this.sortKey]; const bVal = b[this.sortKey];
        const cmp = String(aVal).localeCompare(String(bVal));
        return this.sortDir === 'asc' ? cmp : -cmp;
      });
    }
    this.filteredData = result;
    this.updatePagedData();
  }

  updatePagedData(): void {
    this.pagedData = this.filteredData.slice(this.startIndex, this.endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedData();
  }

  toggleAll(): void {
    if (this.allSelected) { this.pagedData.forEach(r => this.selectedItems.delete(r)); }
    else { this.pagedData.forEach(r => this.selectedItems.add(r)); }
    this.onSelectionChange.emit(Array.from(this.selectedItems));
  }

  toggleRow(row: any): void {
    if (this.selectedItems.has(row)) { this.selectedItems.delete(row); }
    else { this.selectedItems.add(row); }
    this.onSelectionChange.emit(Array.from(this.selectedItems));
  }

  onAction(action: string, row: any): void { this.onActionClick.emit({ action, row }); }
}
