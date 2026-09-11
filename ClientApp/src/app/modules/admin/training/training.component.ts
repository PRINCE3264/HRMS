import { Component, OnInit } from '@angular/core';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class AdminTrainingComponent implements OnInit {
  searchTerm: string = '';
  statusFilter: string = 'ALL';

  showProgramModal: boolean = false;
  newProgram = {
    title: '',
    description: '',
    instructor: '',
    duration: '4 weeks',
    capacity: 20,
    status: 'ACTIVE',
    tagsInput: ''
  };

  programs: any[] = [];

  private gradients = [
    'linear-gradient(135deg, #4461f6, #1e40af)',
    'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    'linear-gradient(135deg, #f59e0b, #b45309)',
    'linear-gradient(135deg, #ef4444, #b91c1c)',
    'linear-gradient(135deg, #06b6d4, #0e7490)',
    'linear-gradient(135deg, #10b981, #047857)'
  ];
  private icons = ['fas fa-code', 'fas fa-users-cog', 'fas fa-cloud', 'fas fa-shield-alt', 'fas fa-chart-line', 'fas fa-lightbulb'];

  constructor(private trainingService: TrainingService, private toast: ToastService) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.trainingService.getTrainings().subscribe({
      next: (data) => this.programs = data.map((t: any, i: number) => ({
        id: t.id,
        title: t.title,
        description: t.description,
        instructor: t.trainer,
        duration: t.duration,
        enrolled: t.enrolledCount || 0,
        capacity: t.maxParticipants || 0,
        status: t.status,
        color: this.gradients[i % this.gradients.length],
        icon: this.icons[i % this.icons.length],
        tags: t.department ? [t.department] : ['General']
      })),
      error: () => this.toast.error('Failed to load training programs')
    });
  }

  get filteredPrograms() {
    return this.programs.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            p.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            p.instructor.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'ALL' || p.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  get totalEnrolled() {
    return this.programs.reduce((acc, p) => acc + p.enrolled, 0);
  }

  openProgramModal() {
    this.showProgramModal = true;
  }

  closeProgramModal() {
    this.showProgramModal = false;
  }

  saveProgram() {
    if (!this.newProgram.title) return;
    this.trainingService.createTraining({
      title: this.newProgram.title,
      description: this.newProgram.description,
      trainer: this.newProgram.instructor,
      duration: this.newProgram.duration,
      maxParticipants: this.newProgram.capacity,
      status: this.newProgram.status,
      type: 'Workshop',
      department: 'General',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      location: 'Online'
    } as any).subscribe({
      next: () => {
        this.toast.success('Training program created');
        this.loadTrainings();
        this.newProgram = { title: '', description: '', instructor: '', duration: '4 weeks', capacity: 20, status: 'ACTIVE', tagsInput: '' };
        this.showProgramModal = false;
      },
      error: () => this.toast.error('Failed to create training program')
    });
  }

  enrollUser(program: any) {
    this.trainingService.enroll(program.id).subscribe({
      next: () => { this.toast.success('Enrolled successfully'); this.loadTrainings(); },
      error: () => this.toast.error('Failed to enroll')
    });
  }
}
