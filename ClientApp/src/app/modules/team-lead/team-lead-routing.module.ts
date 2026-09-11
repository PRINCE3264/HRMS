import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TlDashboardComponent } from './dashboard/dashboard.component';
import { TlMyTeamComponent } from './my-team/my-team.component';
import { TlAttendanceComponent } from './team-attendance/team-attendance.component';
import { TlLeaveComponent } from './team-leave/team-leave.component';
import { TlTasksComponent } from './team-tasks/team-tasks.component';
import { TlPerformanceComponent } from './team-performance/team-performance.component';
import { TlKpiComponent } from './kpi/kpi.component';
import { TlReportsComponent } from './team-reports/team-reports.component';
import { TlAnnouncementsComponent } from './announcements/announcements.component';
import { TlProjectsComponent } from './team-projects/team-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TlDashboardComponent },
  { path: 'team', component: TlMyTeamComponent },
  { path: 'team/attendance', component: TlAttendanceComponent },
  { path: 'team/leave', component: TlLeaveComponent },
  { path: 'team/tasks', component: TlTasksComponent },
  { path: 'team/performance', component: TlPerformanceComponent },
  { path: 'team/kpi', component: TlKpiComponent },
  { path: 'team/reports', component: TlReportsComponent },
  { path: 'announcements', component: TlAnnouncementsComponent },
  { path: 'team/projects', component: TlProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamLeadRoutingModule {}
