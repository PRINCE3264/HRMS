import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, DepartmentService, ToastService } from '../../../core/services';
import { EmployeeOption } from '../../../core/models';

@Component({
  selector: 'app-hr-add-project',
  template: `
    <app-page-header title="Create New Project" subtitle="Set project details, schedule, department allocation, and team lead" [breadcrumbs]="[{label:'Dashboard',link:'/dashboard'},{label:'Projects',link:'/hr/projects'},{label:'Add Project'}]">
      <button class="btn btn--cancel" (click)="cancel()"><i class="fas fa-arrow-left"></i> Back to Projects</button>
    </app-page-header>

    <div class="form-card">
      <div class="form-header">
        <h3><i class="fas fa-folder-plus"></i> Project Profile & Scope</h3>
        <p>Enter the details below to set up a new project workspace.</p>
      </div>

      <div class="form-body">
        <div class="form-section">
          <h4>Basic Information</h4>
          <div class="form-row">
            <div class="form-group">
              <label>Project Name *</label>
              <input type="text" [(ngModel)]="form.name" placeholder="e.g. HRM Mobile App" />
            </div>
            <div class="form-group">
              <label>Project Code</label>
              <input type="text" [(ngModel)]="form.projectCode" placeholder="e.g. PRJ-2026-001" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Department *</label>
              <select [(ngModel)]="form.departmentId">
                <option value="">Select Department</option>
                <option *ngFor="let d of departments" [value]="d.id">{{ d.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Priority Level</label>
              <select [(ngModel)]="form.priority">
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h4>Timeline & Leadership</h4>
          <div class="form-row">
            <div class="form-group">
              <label>Start Date</label>
              <input type="date" [(ngModel)]="form.startDate" />
            </div>
            <div class="form-group">
              <label>Target End Date</label>
              <input type="date" [(ngModel)]="form.endDate" />
            </div>
          </div>

          <div class="form-group full-width">
            <label>Assign Team Lead (Optional)</label>
            <select [(ngModel)]="form.teamLeadId">
              <option value="">-- Select a Team Lead --</option>
              <option *ngFor="let tl of teamLeads" [value]="tl.id">{{ tl.name }} ({{ tl.teamName || tl.designation || tl.department }})</option>
            </select>
            <span class="form-hint">The assigned Team Lead will be responsible for delegating tasks and team members.</span>
          </div>

          <div class="form-group full-width">
            <label>Description & Objectives</label>
            <textarea rows="4" [(ngModel)]="form.description" placeholder="Short summary of project goals, deliverables, and scope..."></textarea>
          </div>
        </div>
      </div>

      <div class="form-footer">
        <button class="btn btn--cancel" (click)="cancel()">Cancel</button>
        <button class="btn btn--primary" (click)="save()"><i class="fas fa-check"></i> Create Project</button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .btn { padding: 8px 16px; border-radius: 8px; font-size: 13.5px; font-weight: 600; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s; }
    .btn--primary { background: linear-gradient(135deg, #4461f6 0%, #1e40af 100%); color: #fff; box-shadow: 0 4px 12px rgba(68,97,246,0.3); }
    .btn--primary:hover { transform: translateY(-1px); }
    .btn--cancel { background: #f1f5f9; color: #64748b; }
    .btn--cancel:hover { background: #e2e8f0; }

    .form-card { background: #ffffff; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0,0,0,0.04); overflow: hidden; margin-top: 16px; }
    .form-header { padding: 20px 24px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
    .form-header h3 { margin: 0 0 4px 0; font-size: 16px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px; }
    .form-header h3 i { color: #4461f6; }
    .form-header p { margin: 0; font-size: 12.5px; color: #64748b; }

    .form-body { padding: 22px; display: flex; flex-direction: column; gap: 20px; }
    .form-section { display: flex; flex-direction: column; gap: 14px; }
    .form-section h4 { margin: 0; font-size: 13px; font-weight: 700; color: #334155; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }

    .form-group { display: flex; flex-direction: column; gap: 4px; }
    .form-group.full-width { grid-column: 1 / -1; }
    .form-group label { font-size: 12.5px; font-weight: 600; color: #475569; }
    .form-group input, .form-group select, .form-group textarea { padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; font-size: 13px; outline: none; transition: border-color 0.2s; }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #4461f6; }
    .form-hint { font-size: 11.5px; color: #94a3b8; }

    .form-footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 10px; }
  `]
})
export class HrProjectAddComponent implements OnInit {
  departments: any[] = [];
  teamLeads: EmployeeOption[] = [];

  form = {
    name: '',
    projectCode: '',
    description: '',
    departmentId: '',
    teamLeadId: '',
    priority: 'MEDIUM',
    startDate: new Date().toISOString().split('T')[0],
    endDate: ''
  };

  constructor(
    private projectService: ProjectService,
    private departmentService: DepartmentService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.toast.error('Failed to load departments')
    });
    this.projectService.getTeamLeads().subscribe({
      next: (data) => this.teamLeads = data,
      error: () => this.toast.error('Failed to load team leads')
    });
  }

  save(): void {
    if (!this.form.name.trim()) {
      this.toast.error('Project name is required');
      return;
    }
    if (!this.form.departmentId) {
      this.toast.error('Please select a department');
      return;
    }

    const payload = {
      name: this.form.name.trim(),
      projectCode: this.form.projectCode || undefined,
      description: this.form.description || undefined,
      departmentId: this.form.departmentId,
      teamLeadId: this.form.teamLeadId || undefined,
      priority: this.form.priority,
      startDate: this.form.startDate || undefined,
      endDate: this.form.endDate || undefined
    };

    this.projectService.createProject(payload).subscribe({
      next: () => {
        this.toast.success('Project created successfully');
        this.router.navigate(['/hr/projects']);
      },
      error: (err) => this.toast.error(err?.error?.message || 'Failed to create project')
    });
  }

  cancel(): void {
    this.router.navigate(['/hr/projects']);
  }
}
