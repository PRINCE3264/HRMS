import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class HrPerformanceComponent {
  activeTab = 'reviews';
  reviews = [
    { name: 'John Smith', department: 'Engineering', period: 'Q4 2024', rating: 5, reviewer: 'Alex Thompson', status: 'Completed', color: '#6366f1' },
    { name: 'Emily Davis', department: 'Marketing', period: 'Q4 2024', rating: 4, reviewer: 'Rachel Green', status: 'Completed', color: '#10b981' },
    { name: 'Robert Wilson', department: 'Finance', period: 'Q4 2024', rating: 4, reviewer: 'Mark Stevens', status: 'In Progress', color: '#f59e0b' },
    { name: 'Lisa Anderson', department: 'Design', period: 'Q4 2024', rating: 5, reviewer: 'Sophia Lee', status: 'Completed', color: '#ef4444' },
    { name: 'James Brown', department: 'Engineering', period: 'Q4 2024', rating: 3, reviewer: 'Alex Thompson', status: 'Pending', color: '#06b6d4' },
    { name: 'Sarah Johnson', department: 'HR', period: 'Q4 2024', rating: 4, reviewer: 'Director HR', status: 'In Progress', color: '#8b5cf6' },
    { name: 'Michael Chen', department: 'Operations', period: 'Q4 2024', rating: 4, reviewer: 'David Park', status: 'Completed', color: '#ec4899' },
  ];
  goals = [
    { employee: 'John Smith', goal: 'Complete API v3 migration', category: 'Technical', progress: 85, dueDate: 'Dec 31, 2024', status: 'On Track', color: '#6366f1' },
    { employee: 'Emily Davis', goal: 'Increase social media engagement by 25%', category: 'Marketing', progress: 70, dueDate: 'Jan 15, 2025', status: 'On Track', color: '#10b981' },
    { employee: 'Robert Wilson', goal: 'Implement automated reporting system', category: 'Process', progress: 45, dueDate: 'Jan 31, 2025', status: 'At Risk', color: '#f59e0b' },
    { employee: 'Lisa Anderson', goal: 'Redesign customer dashboard', category: 'Design', progress: 92, dueDate: 'Dec 20, 2024', status: 'On Track', color: '#ef4444' },
    { employee: 'James Brown', goal: 'Achieve 99.9% uptime for production', category: 'Technical', progress: 60, dueDate: 'Mar 01, 2025', status: 'On Track', color: '#06b6d4' },
  ];
  feedback = [
    { employee: 'John Smith', feedbackFrom: 'Alex Thompson', type: 'Manager', date: 'Dec 15, 2024', rating: 5, status: 'Completed', color: '#6366f1' },
    { employee: 'Emily Davis', feedbackFrom: 'Rachel Green', type: 'Manager', date: 'Dec 14, 2024', rating: 4, status: 'Completed', color: '#10b981' },
    { employee: 'Robert Wilson', feedbackFrom: 'Team Peers', type: 'Peer', date: 'Dec 12, 2024', rating: 3, status: 'Pending', color: '#f59e0b' },
    { employee: 'Lisa Anderson', feedbackFrom: 'Self Review', type: 'Self', date: 'Dec 10, 2024', rating: 4, status: 'Completed', color: '#ef4444' },
    { employee: 'James Brown', feedbackFrom: 'Cross-team', type: 'Peer', date: 'Dec 08, 2024', rating: 3, status: 'Completed', color: '#06b6d4' },
  ];
}
