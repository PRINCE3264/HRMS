import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService, ToastService } from '../../../core/services';

@Component({
  selector: 'app-admin-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class AdminOnboardingComponent implements OnInit {
  searchTerm: string = '';
  deptFilter: string = 'ALL';
  statusFilter: string = 'ALL';
  activeTab: string = 'ALL'; // ALL | IN_PROGRESS | COMPLETED | UPCOMING

  showModal: boolean = false;
  showDetailModal: boolean = false;
  showFilterDropdown: boolean = false;
  selectedPerson: any = null;
  newNoteText: string = '';

  newPerson = {
    name: '',
    position: '',
    department: 'Engineering',
    joinDate: new Date().toISOString().split('T')[0],
    mentor: '',
    email: '',
    phone: ''
  };

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
      documents: [
        { name: 'ID Proof & Passport', verified: true },
        { name: 'Signed Offer Letter', verified: true },
        { name: 'Tax W-4 Form', verified: true },
        { name: 'Bank Details Form', verified: false }
      ],
      notes: [
        { author: 'Michael Chen', time: 'Yesterday at 4:30 PM', text: 'Completed IT setup smoothly. Access granted to GitHub & Jira.' }
      ],
      tasks: [
        { label: 'Account setup', done: true, phase: 'Day 1' },
        { label: 'IT equipment issued', done: true, phase: 'Day 1' },
        { label: 'HR orientation', done: true, phase: 'Day 1' },
        { label: 'Team introduction', done: true, phase: 'Week 1' },
        { label: 'Project assignment', done: false, phase: 'Week 1' },
        { label: 'First week review', done: false, phase: 'Week 1' }
      ]
    },
    {
      id: 'OB-102',
      name: 'Sophia Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      initials: 'SC',
      status: 'In Progress',
      statusClass: 'status-amber',
      position: 'Marketing Specialist',
      department: 'Marketing',
      joinDate: 'Dec 18, 2024',
      accentColor: '#ec4899',
      progress: 50,
      mentor: 'Emily Davis',
      email: 'sophia.c@envision.com',
      phone: '+1 (555) 876-5432',
      documents: [
        { name: 'ID Proof & Passport', verified: true },
        { name: 'Signed Offer Letter', verified: true },
        { name: 'Tax W-4 Form', verified: false }
      ],
      notes: [
        { author: 'Emily Davis', time: 'Dec 18 at 10:00 AM', text: 'HR Orientation completed. Introduced to the marketing team.' }
      ],
      tasks: [
        { label: 'Account setup', done: true, phase: 'Day 1' },
        { label: 'IT equipment issued', done: true, phase: 'Day 1' },
        { label: 'HR orientation', done: true, phase: 'Day 1' },
        { label: 'Team introduction', done: false, phase: 'Week 1' },
        { label: 'Tool access', done: false, phase: 'Week 1' },
        { label: 'First week review', done: false, phase: 'Week 1' }
      ]
    },
    {
      id: 'OB-103',
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      initials: 'MJ',
      status: 'In Progress',
      statusClass: 'status-blue',
      position: 'Sales Executive',
      department: 'Sales',
      joinDate: 'Dec 20, 2024',
      accentColor: '#10b981',
      progress: 75,
      mentor: 'David Park',
      email: 'marcus.j@envision.com',
      phone: '+1 (555) 345-6789',
      documents: [
        { name: 'ID Proof & Passport', verified: true },
        { name: 'Signed Offer Letter', verified: true },
        { name: 'Tax W-4 Form', verified: true },
        { name: 'NDAA & Compliance', verified: true }
      ],
      notes: [
        { author: 'David Park', time: 'Dec 20 at 2:15 PM', text: 'CRM credentials issued. Product demo scheduled for tomorrow.' }
      ],
      tasks: [
        { label: 'Account setup', done: true, phase: 'Day 1' },
        { label: 'IT equipment issued', done: true, phase: 'Day 1' },
        { label: 'HR orientation', done: true, phase: 'Day 1' },
        { label: 'Sales training', done: true, phase: 'Week 1' },
        { label: 'CRM access', done: false, phase: 'Week 1' },
        { label: 'First week review', done: false, phase: 'Week 1' }
      ]
    },
    {
      id: 'OB-104',
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
      initials: 'ER',
      status: 'Completed',
      statusClass: 'status-emerald',
      position: 'UI/UX Designer',
      department: 'Design',
      joinDate: 'Nov 01, 2024',
      accentColor: '#8b5cf6',
      progress: 100,
      mentor: 'Alex Rivera',
      email: 'elena.r@envision.com',
      phone: '+1 (555) 901-2345',
      documents: [
        { name: 'ID Proof & Passport', verified: true },
        { name: 'Signed Offer Letter', verified: true },
        { name: 'Tax W-4 Form', verified: true }
      ],
      notes: [
        { author: 'Alex Rivera', time: 'Nov 15 at 5:00 PM', text: 'Full onboarding completed successfully! 100% tasks verified.' }
      ],
      tasks: [
        { label: 'Account setup', done: true, phase: 'Day 1' },
        { label: 'IT equipment issued', done: true, phase: 'Day 1' },
        { label: 'HR orientation', done: true, phase: 'Day 1' },
        { label: 'Team introduction', done: true, phase: 'Week 1' },
        { label: 'Design system walkthrough', done: true, phase: 'Week 1' },
        { label: 'First week review', done: true, phase: 'Week 1' }
      ]
    }
  ];

  activeOnboardings: any[] = [];
  private accents = ['#2563eb', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];

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
          this.activeOnboardings = data.map((o: any, i: number) => {
            const nameParts = (o.employeeName || '').split(' ');
            const initials = nameParts.map((n: string) => n.charAt(0)).join('').toUpperCase() || 'NEW';
            const tasksList = (o.checklist || o.tasks || []).map((t: any) => ({
              label: t.title || t.label,
              done: t.isCompleted || t.done,
              taskId: t.id
            }));
            const defaultTasks = [
              { label: 'Account setup', done: true },
              { label: 'IT equipment issued', done: true },
              { label: 'HR orientation', done: true },
              { label: 'Team introduction', done: false },
              { label: 'Project assignment', done: false },
              { label: 'First week review', done: false }
            ];

            return {
              id: o.id,
              name: o.employeeName || 'New Hire',
              avatar: o.avatar || null,
              initials: initials,
              status: o.status || 'In Progress',
              statusClass: o.progress === 100 ? 'status-emerald' : i % 2 === 0 ? 'status-green' : 'status-amber',
              position: o.position || 'Employee',
              department: o.department || 'Engineering',
              joinDate: o.startDate || o.joinDate || 'Dec 16, 2024',
              accentColor: this.accents[i % this.accents.length],
              progress: o.progress || 60,
              mentor: o.mentorName || o.mentor || 'Mentor Assigned',
              email: o.email || `${(o.employeeName || 'hire').toLowerCase().replace(/\s+/g, '.')}@envision.com`,
              phone: o.phone || '+1 (555) 000-0000',
              documents: o.documents || [
                { name: 'ID Proof & Passport', verified: true },
                { name: 'Signed Offer Letter', verified: true },
                { name: 'Tax W-4 Form', verified: false }
              ],
              notes: o.notes || [],
              tasks: tasksList.length > 0 ? tasksList : defaultTasks
            };
          });
        } else {
          this.activeOnboardings = [...this.defaultOnboardings];
        }
      },
      error: () => {
        this.activeOnboardings = [...this.defaultOnboardings];
      }
    });
  }

  get inProgressCount(): number {
    return this.activeOnboardings.filter(p => p.progress < 100).length;
  }

  get completedCount(): number {
    return this.activeOnboardings.filter(p => p.progress === 100).length;
  }

  get upcomingCount(): number {
    return 3;
  }

  get filteredOnboardings() {
    return this.activeOnboardings.filter(p => {
      const matchesSearch = (p.name || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (p.position || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (p.department || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            (p.mentor || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesDept = this.deptFilter === 'ALL' || p.department === this.deptFilter;
      
      let matchesTab = true;
      if (this.activeTab === 'IN_PROGRESS') {
        matchesTab = p.progress < 100;
      } else if (this.activeTab === 'COMPLETED') {
        matchesTab = p.progress === 100;
      }

      let matchesStatus = true;
      if (this.statusFilter !== 'ALL') {
        matchesStatus = p.status === this.statusFilter;
      }

      return matchesSearch && matchesDept && matchesTab && matchesStatus;
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
  }

  toggleTask(person: any, task: any) {
    task.done = !task.done;
    const completedCount = person.tasks.filter((t: any) => t.done).length;
    person.progress = Math.round((completedCount / person.tasks.length) * 100);
    if (person.progress === 100) {
      person.status = 'Completed';
      person.statusClass = 'status-emerald';
    } else {
      person.status = 'In Progress';
      person.statusClass = 'status-green';
    }
    if (task.taskId) {
      this.trainingService.updateTask(task.taskId, task.done).subscribe({
        error: () => this.toast.error('Failed to update task')
      });
    }
  }

  navigateToAdd() {
    this.router.navigate(['/admin/onboarding/add']);
  }

  navigateToDetail(person: any) {
    this.router.navigate(['/admin/onboarding', person.id || 'OB-101']);
  }

  navigateToEdit(person: any) {
    this.router.navigate(['/admin/onboarding', person.id || 'OB-101', 'edit']);
  }

  viewDetails(person: any) {
    this.navigateToDetail(person);
  }

  openModal() {
    this.navigateToAdd();
  }

  closeModal() {
    this.showModal = false;
  }

  saveOnboarding() {
    if (!this.newPerson.name || !this.newPerson.position) {
      this.toast.warning('Please fill in Employee Name and Position');
      return;
    }
    this.trainingService.createOnboarding({
      employeeName: this.newPerson.name,
      startDate: this.newPerson.joinDate,
      mentorName: this.newPerson.mentor,
      status: 'IN_PROGRESS'
    } as any).subscribe({
      next: () => {
        this.toast.success('Onboarding candidate added successfully');
        this.loadOnboardings();
        this.resetNewPersonForm();
        this.showModal = false;
      },
      error: () => {
        const nameParts = this.newPerson.name.split(' ');
        const initials = nameParts.map(n => n.charAt(0)).join('').toUpperCase();
        this.activeOnboardings.unshift({
          id: 'OB-' + Date.now(),
          name: this.newPerson.name,
          avatar: null,
          initials: initials,
          status: 'In Progress',
          statusClass: 'status-green',
          position: this.newPerson.position,
          department: this.newPerson.department,
          joinDate: this.newPerson.joinDate,
          accentColor: '#2563eb',
          progress: 0,
          mentor: this.newPerson.mentor || 'Assigned Mentor',
          email: this.newPerson.email || `${nameParts[0].toLowerCase()}@envision.com`,
          phone: this.newPerson.phone || '+1 (555) 000-0000',
          documents: [
            { name: 'ID Proof & Passport', verified: false },
            { name: 'Signed Offer Letter', verified: true },
            { name: 'Tax W-4 Form', verified: false }
          ],
          notes: [],
          tasks: [
            { label: 'Account setup', done: false },
            { label: 'IT equipment issued', done: false },
            { label: 'HR orientation', done: false },
            { label: 'Team introduction', done: false },
            { label: 'Project assignment', done: false },
            { label: 'First week review', done: false }
          ]
        });
        this.toast.success('Onboarding candidate added successfully');
        this.resetNewPersonForm();
        this.showModal = false;
      }
    });
  }

  resetNewPersonForm() {
    this.newPerson = {
      name: '',
      position: '',
      department: 'Engineering',
      joinDate: new Date().toISOString().split('T')[0],
      mentor: '',
      email: '',
      phone: ''
    };
  }

  closeDetailModal() {
    this.showDetailModal = false;
    this.selectedPerson = null;
  }

  addNote() {
    if (!this.newNoteText.trim() || !this.selectedPerson) return;
    if (!this.selectedPerson.notes) {
      this.selectedPerson.notes = [];
    }
    this.selectedPerson.notes.unshift({
      author: 'HR Admin',
      time: 'Just now',
      text: this.newNoteText.trim()
    });
    this.newNoteText = '';
    this.toast.success('Note added to candidate profile');
  }

  toggleDocVerified(doc: any) {
    doc.verified = !doc.verified;
    this.toast.info(`${doc.name} status updated to ${doc.verified ? 'Verified' : 'Pending'}`);
  }
}
