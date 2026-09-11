import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamLeadRoutingModule } from './team-lead-routing.module';
import { SharedModule } from '../../shared/shared.module';
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

@NgModule({
  declarations: [
    TlDashboardComponent, TlMyTeamComponent, TlAttendanceComponent, TlLeaveComponent,
    TlTasksComponent, TlPerformanceComponent, TlKpiComponent, TlReportsComponent, TlAnnouncementsComponent,
    TlProjectsComponent
  ],
  imports: [CommonModule, FormsModule, TeamLeadRoutingModule, SharedModule]
})
export class TeamLeadModule {}
