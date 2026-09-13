import { Component, OnInit } from '@angular/core';
import { AuthService, ToastService } from '../../../core/services';
import { User } from '../../../core/models';

@Component({
  selector: 'app-tl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class TlDashboardComponent implements OnInit {
  currentUser: User | null = null;
  currentDateFormatted = '';

  // 1. Executive Stat Cards
  teamMembersCount = 12;
  activeTasksCount = 28;
  onLeaveCount = 1;
  pendingTasksCount = 8;

  // 2. Attendance Chart Data
  attendanceWeekData = [
    { day: 'Mon', present: 9, absent: 3 },
    { day: 'Tue', present: 8, absent: 4 },
    { day: 'Wed', present: 8, absent: 4 },
    { day: 'Thu', present: 9, absent: 3 },
    { day: 'Fri', present: 9, absent: 3 },
    { day: 'Sat', present: 8, absent: 4 },
    { day: 'Sun', present: 7, absent: 5 }
  ];

  // 3. Task Status Donut Data
  taskStatusData = [
    { label: 'Completed', value: 18, color: '#10b981' },
    { label: 'In Progress', value: 6, color: '#3b82f6' },
    { label: 'Pending', value: 4, color: '#f59e0b' }
  ];

  // 4. Team Productivity Line Data
  productivityWeeks = ['W1', 'W2', 'W3', 'W4'];
  completedProductivity = [40, 68, 55, 90];
  assignedProductivity = [20, 32, 35, 52];

  // 5. My Team
  teamMembers = [
    { id: 1, name: 'Rahul Sharma', designation: 'Angular Developer', status: 'Present', statusClass: 'present', work: 'UI Fixes', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sneha Verma', designation: 'Backend Developer', status: 'Present', statusClass: 'present', work: 'API Development', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Amit Kumar', designation: 'UI/UX Designer', status: 'Present', statusClass: 'present', work: 'Design Review', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 4, name: 'Neha Singh', designation: 'QA Engineer', status: 'On Leave', statusClass: 'leave', work: '-', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 5, name: 'Vikram Patel', designation: 'Flutter Developer', status: 'Present', statusClass: 'present', work: 'Module Testing', avatar: 'https://i.pravatar.cc/150?img=12' }
  ];

  // 6. Today's Tasks
  todaysTasks = [
    { id: 1, title: 'Review UI changes - Rahul', priority: 'High', priorityClass: 'high', completed: false },
    { id: 2, title: 'Check API integration - Sneha', priority: 'Medium', priorityClass: 'medium', completed: false },
    { id: 3, title: 'QA testing review - Vikram', priority: 'Medium', priorityClass: 'medium', completed: false },
    { id: 4, title: 'Prepare sprint report', priority: 'Low', priorityClass: 'low', completed: false }
  ];

  // 7. Leave Requests
  leaveRequests = [
    { id: 1, name: 'Neha Singh', type: 'Casual Leave (1 Day)', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=9' },
    { id: 2, name: 'Rohit Mehta', type: 'Sick Leave (2 Days)', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 3, name: 'Pooja Yadav', type: 'Personal Leave (1 Day)', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=25' }
  ];

  // 8. Upcoming Meetings
  upcomingMeetings = [
    { id: 1, day: '13', month: 'Sep', color: 'red', title: 'Sprint Review Meeting', time: '10:00 AM - 11:00 AM', platform: 'Microsoft Teams', icon: 'fab fa-windows' },
    { id: 2, day: '15', month: 'Sep', color: 'amber', title: 'Performance Discussion', time: '02:00 PM - 03:00 PM', platform: 'Google Meet', icon: 'fas fa-video' },
    { id: 3, day: '16', month: 'Sep', color: 'blue', title: 'Client Demo Preparation', time: '11:00 AM - 12:00 PM', platform: 'Microsoft Teams', icon: 'fab fa-windows' }
  ];

  // 9. Recent Activity
  recentActivity = [
    { id: 1, name: 'Rahul Sharma', action: 'completed UI module task', time: '2 hours ago', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Sneha Verma', action: 'submitted daily report', time: '3 hours ago', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, name: 'Amit Kumar', action: 'marked attendance', time: '4 hours ago', avatar: 'https://i.pravatar.cc/150?img=13' },
    { id: 4, name: 'Neha Singh', action: 'raised a leave request', time: '5 hours ago', avatar: 'https://i.pravatar.cc/150?img=9' }
  ];

  constructor(private authService: AuthService, private toast: ToastService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    this.currentDateFormatted = now.toLocaleDateString('en-US', options);
  }

  toggleTask(task: any): void {
    task.completed = !task.completed;
    if (task.completed) {
      this.toast.success(`Task "${task.title}" completed`);
    }
  }

  approveLeave(req: any): void {
    req.status = 'Approved';
    this.toast.success(`Leave request for ${req.name} approved`);
  }

  rejectLeave(req: any): void {
    req.status = 'Rejected';
    this.toast.info(`Leave request for ${req.name} rejected`);
  }
}
