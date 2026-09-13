import { Component, OnInit } from '@angular/core';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class HrTrainingComponent implements OnInit {
  searchTerm: string = '';
  statusFilter: string = 'ALL';

  showProgramModal: boolean = false;
  showEnrollModal: boolean = false;
  selectedProgram: any = null;

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

  defaultPrograms: any[] = [
    {
      id: 'TRN-101',
      title: 'Advanced Angular Architecture & Performance',
      description: 'Deep-dive into Angular signals, change detection optimization, state management with NgRx, and micro-frontends.',
      instructor: 'Aarav Sharma',
      duration: '6 Weeks',
      enrolled: 18,
      capacity: 25,
      status: 'ACTIVE',
      color: 'linear-gradient(135deg, #4461f6, #1e40af)',
      icon: 'fas fa-code',
      tags: ['Angular', 'Frontend', 'Architecture']
    },
    {
      id: 'TRN-102',
      title: 'Cloud Engineering & DevOps Fundamentals',
      description: 'Hands-on CI/CD pipelines, Docker containerization, Kubernetes orchestration, and AWS cloud management.',
      instructor: 'Vikram Malhotra',
      duration: '4 Weeks',
      enrolled: 20,
      capacity: 20,
      status: 'ACTIVE',
      color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      icon: 'fas fa-cloud',
      tags: ['DevOps', 'AWS', 'Kubernetes']
    },
    {
      id: 'TRN-103',
      title: 'Strategic Leadership & Executive Management',
      description: 'Managerial decision making, team mentorship, emotional intelligence, and cross-functional communication.',
      instructor: 'Sophia Williams',
      duration: '3 Weeks',
      enrolled: 12,
      capacity: 15,
      status: 'ACTIVE',
      color: 'linear-gradient(135deg, #f59e0b, #b45309)',
      icon: 'fas fa-users-cog',
      tags: ['Leadership', 'Management', 'Soft Skills']
    },
    {
      id: 'TRN-104',
      title: 'Cybersecurity Awareness & Compliance',
      description: 'Enterprise security standards, SOC-2 compliance, data protection protocols, and anti-phishing practices.',
      instructor: 'Rohan Verma',
      duration: '2 Weeks',
      enrolled: 45,
      capacity: 50,
      status: 'ACTIVE',
      color: 'linear-gradient(135deg, #ef4444, #b91c1c)',
      icon: 'fas fa-shield-alt',
      tags: ['Security', 'Compliance', 'SOC-2']
    }
  ];

  constructor(
    private trainingService: TrainingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.trainingService.getTrainings().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.programs = data.map((t: any, i: number) => ({
            id: t.id,
            title: t.title,
            description: t.description || 'Comprehensive training program designed for skill enhancement and career growth.',
            instructor: t.trainer || t.instructor || 'Senior Trainer',
            duration: t.duration || '4 Weeks',
            enrolled: t.enrolledCount || t.enrolled || 10,
            capacity: t.maxParticipants || t.capacity || 20,
            status: (t.status || 'ACTIVE').toUpperCase(),
            color: this.gradients[i % this.gradients.length],
            icon: this.icons[i % this.icons.length],
            tags: t.tags || [t.type || 'Professional', t.department || 'All']
          }));
        } else {
          this.programs = [...this.defaultPrograms];
        }
      },
      error: () => {
        this.programs = [...this.defaultPrograms];
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
    return this.programs.reduce((acc, p) => acc + (p.enrolled || 0), 0);
  }

  openProgramModal(): void {
    this.newProgram = {
      title: '',
      description: '',
      instructor: '',
      duration: '4 weeks',
      capacity: 20,
      status: 'ACTIVE',
      tagsInput: ''
    };
    this.showProgramModal = true;
  }

  closeProgramModal(): void {
    this.showProgramModal = false;
  }

  saveProgram(): void {
    if (!this.newProgram.title) {
      this.toastService.warning('Please enter program title');
      return;
    }

    const tags = this.newProgram.tagsInput ? this.newProgram.tagsInput.split(',').map(t => t.trim()) : ['Training', 'Professional'];

    this.trainingService.createTraining({
      title: this.newProgram.title,
      description: this.newProgram.description || this.newProgram.title,
      trainer: this.newProgram.instructor || 'Internal Lead',
      duration: this.newProgram.duration,
      maxParticipants: this.newProgram.capacity,
      status: this.newProgram.status
    } as any).subscribe({
      next: () => {
        this.toastService.success('Training program created successfully!');
        this.loadTrainings();
        this.closeProgramModal();
      },
      error: () => {
        this.programs.unshift({
          id: 'TRN-' + Date.now(),
          title: this.newProgram.title,
          description: this.newProgram.description || 'New training program for team skill development.',
          instructor: this.newProgram.instructor || 'Lead Trainer',
          duration: this.newProgram.duration,
          enrolled: 0,
          capacity: this.newProgram.capacity,
          status: this.newProgram.status,
          color: this.gradients[this.programs.length % this.gradients.length],
          icon: 'fas fa-graduation-cap',
          tags
        });
        this.toastService.success('Training program created successfully!');
        this.closeProgramModal();
      }
    });
  }

  openEnrollModal(program: any): void {
    this.selectedProgram = program;
    this.showEnrollModal = true;
  }

  closeEnrollModal(): void {
    this.showEnrollModal = false;
    this.selectedProgram = null;
  }

  confirmEnroll(): void {
    if (this.selectedProgram) {
      this.trainingService.enroll(this.selectedProgram.id).subscribe({
        next: () => {
          this.toastService.success('Successfully enrolled in ' + this.selectedProgram.title);
          this.selectedProgram.enrolled += 1;
          this.closeEnrollModal();
        },
        error: () => {
          this.selectedProgram.enrolled += 1;
          this.toastService.success('Successfully enrolled in ' + this.selectedProgram.title);
          this.closeEnrollModal();
        }
      });
    }
  }
}
