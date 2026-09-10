import { Component } from '@angular/core';

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
export class TlMyTeamComponent {
  searchTerm = '';
  filterDepartment = '';
  filterStatus = '';

  showToast = false;
  toastMsg = '';

  departmentsList = ['Engineering', 'Design', 'QA'];

  members: TeamMember[] = [
    { name: 'John Smith', employeeId: 'EMP001', designation: 'Senior Developer', department: 'Engineering', email: 'john.smith@company.com', phone: '+1 555-0101', status: 'ACTIVE', tasksCount: 5 },
    { name: 'Emily Davis', employeeId: 'EMP002', designation: 'Developer', department: 'Engineering', email: 'emily.davis@company.com', phone: '+1 555-0102', status: 'ACTIVE', tasksCount: 3 },
    { name: 'David Lee', employeeId: 'EMP003', designation: 'Junior Developer', department: 'Engineering', email: 'david.lee@company.com', phone: '+1 555-0103', status: 'ACTIVE', tasksCount: 4 },
    { name: 'Maria Garcia', employeeId: 'EMP004', designation: 'Developer', department: 'Engineering', email: 'maria.garcia@company.com', phone: '+1 555-0104', status: 'ON_LEAVE', tasksCount: 2 },
    { name: 'James Brown', employeeId: 'EMP005', designation: 'Senior Developer', department: 'Engineering', email: 'james.brown@company.com', phone: '+1 555-0105', status: 'ACTIVE', tasksCount: 6 },
    { name: 'Anna Wilson', employeeId: 'EMP006', designation: 'Developer', department: 'Design', email: 'anna.wilson@company.com', phone: '+1 555-0106', status: 'ACTIVE', tasksCount: 3 },
    { name: 'Robert Taylor', employeeId: 'EMP007', designation: 'QA Engineer', department: 'QA', email: 'robert.taylor@company.com', phone: '+1 555-0107', status: 'ACTIVE', tasksCount: 4 },
    { name: 'Sophie Martin', employeeId: 'EMP008', designation: 'UI Designer', department: 'Design', email: 'sophie.martin@company.com', phone: '+1 555-0108', status: 'ACTIVE', tasksCount: 5 },
    { name: 'Chris Anderson', employeeId: 'EMP009', designation: 'Junior QA', department: 'QA', email: 'chris.anderson@company.com', phone: '+1 555-0109', status: 'ON_LEAVE', tasksCount: 1 },
    { name: 'Laura Thomas', employeeId: 'EMP010', designation: 'Developer', department: 'Engineering', email: 'laura.thomas@company.com', phone: '+1 555-0110', status: 'ACTIVE', tasksCount: 3 },
    { name: 'Kevin Jackson', employeeId: 'EMP011', designation: 'Senior Developer', department: 'Engineering', email: 'kevin.jackson@company.com', phone: '+1 555-0111', status: 'ACTIVE', tasksCount: 7 },
    { name: 'Rachel White', employeeId: 'EMP012', designation: 'Developer', department: 'Engineering', email: 'rachel.white@company.com', phone: '+1 555-0112', status: 'ACTIVE', tasksCount: 4 },
  ];

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
    this.triggerToast(`New task assignment window opened for ${member.name}`);
  }

  viewProfile(member: TeamMember): void {
    this.triggerToast(`Viewing ${member.name}'s profile details`);
  }

  viewAttendance(member: TeamMember): void {
    this.triggerToast(`Viewing ${member.name}'s attendance logs`);
  }

  private triggerToast(msg: string): void {
    this.toastMsg = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}

