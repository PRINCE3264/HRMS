import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../core/services/organization.service';
import { ToastService } from '../../../core/services/toast.service';
import { ReportingNode, ReportingFlat } from '../../../core/models';

@Component({
  selector: 'app-admin-reporting-hierarchy',
  templateUrl: './reporting-hierarchy.component.html',
  styleUrls: ['./reporting-hierarchy.component.scss']
})
export class AdminReportingHierarchyComponent implements OnInit {
  viewMode: 'tree' | 'map' = 'tree';
  loading = false;
  tree: ReportingNode[] = [];
  flatMap: ReportingFlat[] = [];
  allEmployees: ReportingFlat[] = [];
  selectedRoot = '';

  mapColumns = [
    { key: 'name', label: 'Employee' },
    { key: 'designation', label: 'Designation' },
    { key: 'department', label: 'Department' },
    { key: 'managerName', label: 'Reports To' }
  ];

  constructor(private orgService: OrganizationService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadTree();
    this.loadMap();
  }

  trackById(_: number, node: ReportingNode): string {
    return node.id;
  }

  switchView(mode: 'tree' | 'map'): void {
    this.viewMode = mode;
    if (mode === 'map' && !this.flatMap.length) {
      this.loadMap();
    }
  }

  loadTree(): void {
    this.loading = true;
    this.orgService.getReportingHierarchy(this.selectedRoot || undefined).subscribe({
      next: (data) => { this.tree = data; this.loading = false; },
      error: () => { this.loading = false; this.toast.error('Failed to load reporting hierarchy'); }
    });
  }

  loadMap(): void {
    this.loading = true;
    this.orgService.getReportingMap().subscribe({
      next: (data) => {
        this.flatMap = data;
        this.allEmployees = data.map(d => ({ ...d }));
        this.loading = false;
      },
      error: () => { this.loading = false; this.toast.error('Failed to load reporting map'); }
    });
  }
}