import { Component } from '@angular/core';

@Component({
  selector: 'app-tl-tasks',
  templateUrl: './team-tasks.component.html',
  styleUrls: ['./team-tasks.component.scss']
})
export class TlTasksComponent {
  filterAssignee = '';
  filterPriority = '';
  showAddTask = false;

  columns = [
    { key: 'TODO', title: 'To Do', color: '#94a3b8' },
    { key: 'IN_PROGRESS', title: 'In Progress', color: '#6366f1' },
    { key: 'IN_REVIEW', title: 'In Review', color: '#f59e0b' },
    { key: 'DONE', title: 'Done', color: '#10b981' },
  ];

  tasks = [
    { id: 'TSK-001', title: 'Design API endpoints', description: 'Create REST API design document for the new module', assignee: 'John Smith', priority: 'HIGH', status: 'IN_PROGRESS', dueDate: 'Dec 20', isOverdue: false },
    { id: 'TSK-002', title: 'Fix authentication bug', description: 'Users getting logged out unexpectedly after 5 minutes', assignee: 'Emily Davis', priority: 'URGENT', status: 'TODO', dueDate: 'Dec 16', isOverdue: true },
    { id: 'TSK-003', title: 'Write unit tests', description: 'Add unit tests for the payment module components', assignee: 'David Lee', priority: 'MEDIUM', status: 'TODO', dueDate: 'Dec 22', isOverdue: false },
    { id: 'TSK-004', title: 'Update database schema', description: 'Add new columns for employee preferences table', assignee: 'James Brown', priority: 'HIGH', status: 'IN_REVIEW', dueDate: 'Dec 18', isOverdue: false },
    { id: 'TSK-005', title: 'Create dashboard widgets', description: 'Build reusable chart widgets for the analytics page', assignee: 'Anna Wilson', priority: 'MEDIUM', status: 'IN_PROGRESS', dueDate: 'Dec 24', isOverdue: false },
    { id: 'TSK-006', title: 'Code review for PR #189', description: 'Review and approve the notification feature PR', assignee: 'John Smith', priority: 'LOW', status: 'IN_REVIEW', dueDate: 'Dec 19', isOverdue: false },
    { id: 'TSK-007', title: 'Deploy staging build', description: 'Prepare and deploy the latest build to staging environment', assignee: 'James Brown', priority: 'HIGH', status: 'TODO', dueDate: 'Dec 17', isOverdue: true },
    { id: 'TSK-008', title: 'Update documentation', description: 'Update API documentation with new endpoints', assignee: 'Laura Thomas', priority: 'LOW', status: 'DONE', dueDate: 'Dec 15', isOverdue: false },
    { id: 'TSK-009', title: 'Optimize queries', description: 'Optimize slow database queries for the reports page', assignee: 'Emily Davis', priority: 'MEDIUM', status: 'DONE', dueDate: 'Dec 14', isOverdue: false },
    { id: 'TSK-010', title: 'Setup CI pipeline', description: 'Configure GitHub Actions for automated testing', assignee: 'Kevin Jackson', priority: 'HIGH', status: 'DONE', dueDate: 'Dec 12', isOverdue: false },
  ];

  get uniqueAssignees() { return [...new Set(this.tasks.map(t => t.assignee))]; }

  getColumnTasks(status: string) {
    return this.tasks.filter(t => {
      if (t.status !== status) return false;
      if (this.filterAssignee && t.assignee !== this.filterAssignee) return false;
      if (this.filterPriority && t.priority !== this.filterPriority) return false;
      return true;
    });
  }
}
