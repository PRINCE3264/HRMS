import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../../core/services';
import { Training } from '../../../core/models';
import { ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class HrTrainingComponent implements OnInit {
  searchTerm: string = '';
  statusFilter: string = 'ALL';

  showEnrollModal: boolean = false;
  selectedProgram: any = null;

  programs: any[] = [];

  private cardStyles = [
    { color: 'linear-gradient(135deg, #4461f6, #1e40af)', icon: 'fas fa-laptop-code', tags: ['Training', 'Development'] },
    { color: 'linear-gradient(135deg, #f59e0b, #b45309)', icon: 'fas fa-crown', tags: ['Leadership', 'Soft Skills'] },
    { color: 'linear-gradient(135deg, #ef4444, #b91c1c)', icon: 'fas fa-shield-alt', tags: ['Security', 'Compliance'] },
    { color: 'linear-gradient(135deg, #10b981, #047857)', icon: 'fas fa-chart-bar', tags: ['Data', 'Analytics'] },
    { color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', icon: 'fas fa-tasks', tags: ['Management', 'Planning'] },
    { color: 'linear-gradient(135deg, #ec4899, #be185d)', icon: 'fas fa-paint-brush', tags: ['Design', 'UX'] },
  ];

  constructor(private trainingService: TrainingService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.trainingService.getTrainings().subscribe({
      next: (data) => {
        this.programs = data.map((t, i) => {
          const style = this.cardStyles[i % this.cardStyles.length];
          return {
            id: t.id,
            title: t.title,
            description: t.description,
            instructor: t.trainer,
            duration: t.duration,
            enrolled: t.enrolledCount,
            capacity: t.maxParticipants,
            rating: 4,
            status: (t.status || 'ACTIVE').toUpperCase(),
            color: style.color,
            icon: style.icon,
            tags: [t.type || 'General', t.department || 'All'],
          };
        });
      }
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

  openEnrollModal(program: any) {
    this.selectedProgram = program;
    this.showEnrollModal = true;
  }

  closeEnrollModal() {
    this.showEnrollModal = false;
    this.selectedProgram = null;
  }

  confirmEnroll() {
    if (this.selectedProgram) {
      this.trainingService.enroll(this.selectedProgram.id).subscribe({
        next: () => {
          this.toastService.success('Successfully enrolled in ' + this.selectedProgram.title);
          this.loadTrainings();
          this.closeEnrollModal();
        },
        error: () => {
          this.toastService.error('Failed to enroll');
          this.closeEnrollModal();
        }
      });
    }
  }
}
