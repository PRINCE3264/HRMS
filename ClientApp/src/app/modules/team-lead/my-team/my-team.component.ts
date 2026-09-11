import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EmployeeService, PerformanceService, AuthService, ToastService } from '../../../core/services';

export interface TeamMember {
  name: string;
  employeeId: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'ON_LEAVE';
  avatarColor?: string;
  tasksCount?: number;
}

@Component({
  selector: 'app-tl-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class TlMyTeamComponent implements OnInit {
  searchTerm = '';
  filterDepartment = '';
  filterStatus = '';

  showToast = false;
  toastMsg = '';

  departmentsList: string[] = [];
  members: TeamMember[] = [];

  constructor(
    private employeeService: EmployeeService,
    private performanceService: PerformanceService,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadTeam();
  }

  loadTeam(): void {
    const user = this.authService.currentUser;
    if (!user?.employeeId) return;

    forkJoin({
      employees: this.employeeService.getAllEmployees(),
      tasks: this.performanceService.getAssignedByMe()
    }).subscribe(({ employees, tasks }) => {
      const team = employees.filter(e => e.reportingManagerId === user.employeeId);
      this.departmentsList = [...new Set(team.map(e => e.department))];

      this.members = team.map(e => ({
        name: `${e.firstName} ${e.lastName}`,
        employeeId: e.employeeId,
        designation: e.designation,
        department: e.department,
        email: e.email,
        phone: e.phone,
        status: (e.employmentStatus === 'ACTIVE' ? 'ACTIVE' : 'ON_LEAVE') as 'ACTIVE' | 'ON_LEAVE',
        tasksCount: tasks.filter(t => t.assignedTo === e.id || (t as any).assignedToId === e.id).length
      }));
    });
  }

  get filteredMembers(): TeamMember[] {
    return this.members.filter(m => {
      const matchSearch = !this.searchTerm ||
        m.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        m.employeeId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        m.designation.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchDept = !this.filterDepartment || m.department === this.filterDepartment;
      const matchStatus = !this.filterStatus || m.status === this.filterStatus;
      return matchSearch && matchDept && matchStatus;
    });
  }

  getInitial(name: string): string {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }

  assignTask(member: TeamMember): void {
    this.toastService.info(`New task assignment window opened for ${member.name}`);
  }

  viewProfile(member: TeamMember): void {
    this.toastService.info(`Viewing ${member.name}'s profile details`);
  }

  viewAttendance(member: TeamMember): void {
    this.toastService.info(`Viewing ${member.name}'s attendance logs`);
  }
}
