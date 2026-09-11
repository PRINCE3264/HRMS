import { Component, OnInit } from '@angular/core';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class AdminOnboardingComponent implements OnInit {
  searchTerm: string = '';
  deptFilter: string = 'ALL';

  showModal: boolean = false;
  newPerson = {
    name: '',
    position: '',
    department: 'Engineering',
    joinDate: new Date().toISOString().split('T')[0],
    mentor: ''
  };

  activeOnboardings: any[] = [];

  private gradients = [
    'linear-gradient(135deg, #4461f6, #1e40af)',
    'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    'linear-gradient(135deg, #06b6d4, #0e7490)',
    'linear-gradient(135deg, #f59e0b, #b45309)'
  ];

  constructor(private trainingService: TrainingService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadOnboardings();
  }

  loadOnboardings(): void {
    this.trainingService.getOnboardings().subscribe({
      next: (data) => this.activeOnboardings = data.map((o: any, i: number) => {
        const nameParts = (o.employeeName || '').split(' ');
        const initials = nameParts.map((n: string) => n.charAt(0)).join('').toUpperCase() || 'NEW';
        return {
          id: o.id,
          name: o.employeeName,
          position: '',
          department: '',
          joinDate: o.startDate,
          initials: initials,
          color: this.gradients[i % this.gradients.length],
          progress: o.progress || 0,
          mentor: o.mentorName || '',
          tasks: (o.checklist || o.tasks || []).map((t: any) => ({
            label: t.title,
            done: t.isCompleted,
            taskId: t.id
          }))
        };
      }),
      error: () => this.toast.error('Failed to load onboardings')
    });
  }

  get filteredOnboardings() {
    return this.activeOnboardings.filter(p => {
      const matchesSearch = (p.name || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (p.position || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (p.mentor || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDept = this.deptFilter === 'ALL' || p.department === this.deptFilter;
      return matchesSearch && matchesDept;
    });
  }

  toggleTask(person: any, task: any) {
    task.done = !task.done;
    const completedCount = person.tasks.filter((t: any) => t.done).length;
    person.progress = Math.round((completedCount / person.tasks.length) * 100);
    if (task.taskId) {
      this.trainingService.updateTask(task.taskId, task.done).subscribe({
        error: () => this.toast.error('Failed to update task')
      });
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveOnboarding() {
    if (!this.newPerson.name || !this.newPerson.position) return;
    this.trainingService.createOnboarding({
      employeeName: this.newPerson.name,
      startDate: this.newPerson.joinDate,
      mentorName: this.newPerson.mentor,
      status: 'IN_PROGRESS'
    } as any).subscribe({
      next: () => {
        this.toast.success('Onboarding created');
        this.loadOnboardings();
        this.newPerson = { name: '', position: '', department: 'Engineering', joinDate: new Date().toISOString().split('T')[0], mentor: '' };
        this.showModal = false;
      },
      error: () => this.toast.error('Failed to create onboarding')
    });
  }
}
