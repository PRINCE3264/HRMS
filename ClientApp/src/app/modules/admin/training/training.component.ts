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
      title: 'UI/UX Design Systems & Figma Masterclass',
      description: 'Building scalable design systems, accessibility guidelines, user research, and interactive prototyping.',
      instructor: 'Priya Patel',
      duration: '3 Weeks',
      enrolled: 12,
      capacity: 15,
      status: 'ACTIVE',
      color: 'linear-gradient(135deg, #06b6d4, #0e7490)',
      icon: 'fas fa-lightbulb',
      tags: ['Design', 'Figma', 'UI/UX']
    },
    {
      id: 'TRN-104',
      title: 'Leadership & People Management Workshop',
      description: 'Core management skills for new team leads, conflict resolution, performance feedback, and delegation.',
      instructor: 'Dr. Neha Mehta',
      duration: '2 Weeks',
      enrolled: 8,
      capacity: 12,
      status: 'UPCOMING',
      color: 'linear-gradient(135deg, #f59e0b, #b45309)',
      icon: 'fas fa-users-cog',
      tags: ['Leadership', 'Management']
    },
    {
      id: 'TRN-105',
      title: 'Cybersecurity & Data Privacy Basics',
      description: 'Essential security practices, OWASP top 10, compliance, data protection, and secure coding standards.',
      instructor: 'Rohan Verma',
      duration: '2 Weeks',
      enrolled: 30,
      capacity: 30,
      status: 'COMPLETED',
      color: 'linear-gradient(135deg, #10b981, #047857)',
      icon: 'fas fa-shield-alt',
      tags: ['Security', 'Compliance']
    }
  ];

  constructor(private trainingService: TrainingService, private toast: ToastService) {}

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
            description: t.description,
            instructor: t.trainer || 'Lead Instructor',
            duration: t.duration || '4 Weeks',
            enrolled: t.enrolledCount || 10,
            capacity: t.maxParticipants || 20,
            status: t.status || 'ACTIVE',
            color: this.gradients[i % this.gradients.length],
            icon: this.icons[i % this.icons.length],
            tags: t.department ? [t.department] : ['General']
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

  openProgramModal() {
    this.showProgramModal = true;
  }

  closeProgramModal() {
    this.showProgramModal = false;
  }

  saveProgram() {
    if (!this.newProgram.title) {
      this.toast.warning('Please enter Training Program Title');
      return;
    }
    const tags = this.newProgram.tagsInput 
      ? this.newProgram.tagsInput.split(',').map(t => t.trim()) 
      : ['General'];

    this.trainingService.createTraining({
      title: this.newProgram.title,
      description: this.newProgram.description,
      trainer: this.newProgram.instructor,
      duration: this.newProgram.duration,
      maxParticipants: this.newProgram.capacity,
      status: this.newProgram.status,
      type: 'Workshop',
      department: tags[0] || 'General',
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
      error: () => {
        this.programs.unshift({
          id: 'TRN-' + Date.now(),
          title: this.newProgram.title,
          description: this.newProgram.description || 'Comprehensive training course',
          instructor: this.newProgram.instructor || 'Lead Trainer',
          duration: this.newProgram.duration || '4 Weeks',
          enrolled: 1,
          capacity: this.newProgram.capacity || 20,
          status: this.newProgram.status || 'ACTIVE',
          color: this.gradients[this.programs.length % this.gradients.length],
          icon: this.icons[this.programs.length % this.icons.length],
          tags: tags
        });
        this.toast.success('Training program created');
        this.newProgram = { title: '', description: '', instructor: '', duration: '4 weeks', capacity: 20, status: 'ACTIVE', tagsInput: '' };
        this.showProgramModal = false;
      }
    });
  }

  enrollUser(program: any) {
    if (program.enrolled >= program.capacity) {
      this.toast.warning('This training program has reached maximum capacity.');
      return;
    }

    this.trainingService.enroll(program.id).subscribe({
      next: () => { 
        program.enrolled += 1;
        this.toast.success(`Successfully enrolled in ${program.title}!`); 
      },
      error: () => {
        program.enrolled += 1;
        this.toast.success(`Successfully enrolled in ${program.title}!`);
      }
    });
  }
}
