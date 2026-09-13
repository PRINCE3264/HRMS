import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-hr-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class HrOnboardingComponent implements OnInit {
  searchTerm: string = '';
  deptFilter: string = 'ALL';
  statusFilter: string = 'ALL';
  activeTab: string = 'ALL';

  showFilterDropdown: boolean = false;

  defaultOnboardings: any[] = [
    {
      id: 'OB-101',
      name: 'Nathan Brooks',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      initials: 'NB',
      status: 'In Progress',
      statusClass: 'status-green',
      position: 'Software Developer',
      department: 'Engineering',
      joinDate: 'Dec 16, 2024',
      accentColor: '#2563eb',
      progress: 75,
      mentor: 'Michael Chen',
      email: 'nathan.b@envision.com',
      phone: '+1 (555) 234-5678',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'IT equipment issued', done: true },
        { label: 'HR orientation', done: true },
        { label: 'Team introduction', done: true }
      ]
    },
    {
      id: 'OB-102',
      name: 'Sophia Patel',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      initials: 'SP',
      status: 'In Progress',
      statusClass: 'status-green',
      position: 'UI/UX Product Designer',
      department: 'Design',
      joinDate: 'Dec 18, 2024',
      accentColor: '#7c3aed',
      progress: 50,
      mentor: 'Lisa Anderson',
      email: 'sophia.p@envision.com',
      phone: '+1 (555) 345-6789',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'Figma access granted', done: true },
        { label: 'Design system walkthrough', done: false },
        { label: 'First sprint task', done: false }
      ]
    },
    {
      id: 'OB-103',
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      initials: 'MV',
      status: 'Completed',
      statusClass: 'status-blue',
      position: 'Marketing Strategist',
      department: 'Marketing',
      joinDate: 'Dec 01, 2024',
      accentColor: '#10b981',
      progress: 100,
      mentor: 'Emily Davis',
      email: 'marcus.v@envision.com',
      phone: '+1 (555) 456-7890',
      tasks: [
        { label: 'Account setup', done: true },
        { label: 'Marketing tools access', done: true },
        { label: 'Strategy briefing', done: true },
        { label: 'First campaign launch', done: true }
      ]
    }
  ];

  onboardings: any[] = [];

  constructor(
    private trainingService: TrainingService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOnboardings();
  }

  loadOnboardings(): void {
    this.trainingService.getOnboardings().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.onboardings = data.map((o: any) => ({
            id: o.id,
            name: o.employeeName || 'New Joinee',
            avatar: o.avatar || null,
            initials: o.employeeName ? o.employeeName.charAt(0) : 'NJ',
            status: o.status || 'In Progress',
            statusClass: o.status === 'Completed' ? 'status-blue' : 'status-green',
            position: o.position || 'Employee',
            department: o.department || 'Engineering',
            joinDate: o.startDate ? new Date(o.startDate).toLocaleDateString() : 'Recently',
            accentColor: '#2563eb',
            progress: o.progress || 50,
            mentor: o.mentorName || 'Unassigned',
            tasks: (o.checklist || []).map((t: any) => ({ label: t.title, done: t.isCompleted }))
          }));
        } else {
          this.onboardings = [...this.defaultOnboardings];
        }
      },
      error: () => {
        this.onboardings = [...this.defaultOnboardings];
      }
    });
  }

  get filteredOnboardings(): any[] {
    return this.onboardings.filter(item => {
      const matchesSearch = !this.searchTerm.trim() ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.department.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesDept = this.deptFilter === 'ALL' || item.department.toLowerCase() === this.deptFilter.toLowerCase();
      const matchesStatus = this.statusFilter === 'ALL' || item.status.toLowerCase() === this.statusFilter.toLowerCase();

      return matchesSearch && matchesDept && matchesStatus;
    });
  }

  get inProgressCount(): number {
    return this.onboardings.filter(o => o.status === 'In Progress' || !o.status).length;
  }

  get completedCount(): number {
    return this.onboardings.filter(o => o.status === 'Completed').length;
  }

  get upcomingCount(): number {
    return this.onboardings.filter(o => o.status === 'Upcoming').length;
  }

  toggleFilterDropdown(): void {
    this.showFilterDropdown = !this.showFilterDropdown;
  }

  toggleTask(person: any, task: any): void {
    task.done = !task.done;
    const doneCount = person.tasks.filter((t: any) => t.done).length;
    person.progress = Math.round((doneCount / person.tasks.length) * 100);
    this.toast.info(`Task "${task.label}" updated.`);
  }

  navigateToAdd(): void {
    this.router.navigate(['/hr/onboarding/add']);
  }

  navigateToDetail(person: any): void {
    this.router.navigate(['/hr/onboarding', person.id]);
  }

  navigateToEdit(person: any): void {
    this.router.navigate(['/hr/onboarding', person.id, 'edit']);
  }
}
