import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../core/services';
import { Onboarding } from '../../../core/models';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class HrOnboardingComponent implements OnInit {
  onboarding: any[] = [];

  private deptColors: string[] = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.loadOnboardings();
  }

  loadOnboardings(): void {
    this.trainingService.getOnboardings().subscribe({
      next: (data) => {
        this.onboarding = data.map((o, i) => ({
          name: o.employeeName,
          role: '',
          department: '',
          startDate: o.startDate ? 'Started ' + new Date(o.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '',
          progress: o.progress || 0,
          color: this.deptColors[i % this.deptColors.length],
          tasks: (o.checklist || []).map((t: any) => ({
            label: t.title,
            done: t.isCompleted,
            taskId: t.id,
          })),
          id: o.id,
        }));
      }
    });
  }
}
