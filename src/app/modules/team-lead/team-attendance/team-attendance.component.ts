import { Component } from '@angular/core';

export interface AttendanceRecord {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE' | 'PENDING';
  inTime?: string;
  outTime?: string;
  breakHours?: string;
  netHours?: string;
  statusBadge?: string;
  avatar?: string;
}

@Component({
  selector: 'app-tl-attendance',
  templateUrl: './team-attendance.component.html',
  styleUrls: ['./team-attendance.component.scss']
})
export class TlAttendanceComponent {
  activeTab: 'attendance' | 'summary' = 'attendance';
  searchQuery = '';
  filterStatus = 'ALL';
  selectedDateLabel = '9 Sep';

  attendance: AttendanceRecord[] = [
    {
      id: '1',
      name: 'PRINCE VIDYARTHI',
      employeeId: 'EMP-1059',
      department: 'Engineering & Technology',
      status: 'PRESENT',
      inTime: '12:32 AM',
      outTime: 'Working',
      breakHours: '9h 3m',
      netHours: '39h 8m',
      statusBadge: 'Approved'
    },
    {
      id: '2',
      name: 'Jigar Chovatiya',
      employeeId: 'EMP-1060',
      department: 'Information Technology',
      status: 'PRESENT',
      inTime: '09:24 AM',
      outTime: 'Working',
      breakHours: '9m',
      netHours: '39h 10m',
      statusBadge: 'Approved'
    },
    {
      id: '3',
      name: 'Ananya Roy',
      employeeId: 'EMP-1061',
      department: 'UI/UX & Mobile',
      status: 'PRESENT',
      inTime: '09:15 AM',
      outTime: 'Working',
      breakHours: '45m',
      netHours: '8h 30m',
      statusBadge: 'Approved'
    },
    {
      id: '4',
      name: 'Gaurav Modi',
      employeeId: 'EMP-1013',
      department: 'Engineering',
      status: 'ABSENT'
    },
    {
      id: '5',
      name: 'Priya Patel',
      employeeId: 'EMP-1043',
      department: 'Engineering',
      status: 'ABSENT'
    },
    {
      id: '6',
      name: 'Vikram Mehta',
      employeeId: 'MGR-201',
      department: 'Engineering Management',
      status: 'ABSENT'
    },
    {
      id: '7',
      name: 'Rahul Sharma',
      employeeId: 'EMP-1062',
      department: 'Data & BI',
      status: 'ABSENT'
    },
    {
      id: '8',
      name: 'Kavita Patel',
      employeeId: 'EMP-1063',
      department: 'Hardware & Security',
      status: 'ABSENT'
    },
    {
      id: '9',
      name: 'Sanjay Gupta',
      employeeId: 'EMP-1064',
      department: 'Finance Tech',
      status: 'ABSENT'
    },
    {
      id: '10',
      name: 'Amit Shah',
      employeeId: 'EMP-1065',
      department: 'Engineering',
      status: 'ABSENT'
    },
    {
      id: '11',
      name: 'Neha Verma',
      employeeId: 'EMP-1066',
      department: 'Design',
      status: 'ABSENT'
    },
    {
      id: '12',
      name: 'Rohan Patel',
      employeeId: 'EMP-1067',
      department: 'QA',
      status: 'ABSENT'
    }
  ];

  get filteredAttendance(): AttendanceRecord[] {
    return this.attendance.filter(a => {
      // Filter status
      if (this.filterStatus !== 'ALL' && a.status !== this.filterStatus) {
        return false;
      }
      // Search query
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matchName = a.name.toLowerCase().includes(q);
        const matchId = a.employeeId.toLowerCase().includes(q);
        const matchDept = a.department.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchDept) return false;
      }
      return true;
    });
  }

  get totalMembersCount(): number { return this.attendance.length; }
  get presentCount(): number { return this.attendance.filter(a => a.status === 'PRESENT').length; }
  get absentCount(): number { return this.attendance.filter(a => a.status === 'ABSENT').length; }
  get lateCount(): number { return this.attendance.filter(a => a.status === 'LATE').length; }
  get pendingCount(): number { return this.attendance.filter(a => a.status === 'PENDING').length; }

  get attendanceRatePercentage(): number {
    if (this.totalMembersCount === 0) return 0;
    return Math.round((this.presentCount / this.totalMembersCount) * 100);
  }

  get absentMembers(): AttendanceRecord[] {
    return this.attendance.filter(a => a.status === 'ABSENT');
  }

  getInitial(name: string): string {
    if (!name) return 'U';
    return name.trim().charAt(0).toUpperCase();
  }
}

