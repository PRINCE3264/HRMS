import { Component, OnInit } from '@angular/core';
import { DepartmentService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class AdminBranchesComponent implements OnInit {
  showAdd = false;
  branches: any[] = [];

  private gradients = [
    'linear-gradient(135deg, #6366f1, #818cf8)',
    'linear-gradient(135deg, #06b6d4, #22d3ee)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
    'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    'linear-gradient(135deg, #ec4899, #f472b6)'
  ];

  constructor(private departmentService: DepartmentService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.departmentService.getBranches().subscribe({
      next: (data) => this.branches = data.map((b: any, i: number) => ({
        ...b,
        color: this.gradients[i % this.gradients.length]
      })),
      error: () => this.toast.error('Failed to load branches')
    });
  }
}
