import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EmpDashboardComponent } from './dashboard/dashboard.component';
import { EmpProfileComponent } from './my-profile/my-profile.component';
import { EmpAttendanceComponent } from './my-attendance/my-attendance.component';
import { EmpCheckInOutComponent } from './check-in-out/check-in-out.component';
import { EmpLeaveComponent } from './my-leave/my-leave.component';
import { EmpApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmpPayslipsComponent } from './my-payslips/my-payslips.component';
import { EmpTasksComponent } from './my-tasks/my-tasks.component';
import { EmpPerformanceComponent } from './my-performance/my-performance.component';
import { EmpDocumentsComponent } from './my-documents/my-documents.component';
import { EmpAnnouncementsComponent } from './announcements/announcements.component';
import { EmpNotificationsComponent } from './notifications/notifications.component';
import { EmpBreakTrackerComponent } from './break-tracker/break-tracker.component';
import { EmpDailyWorkUpdateComponent } from './daily-work-update/daily-work-update.component';
import { EmpProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  declarations: [
    EmpDashboardComponent, EmpProfileComponent, EmpAttendanceComponent, EmpCheckInOutComponent,
    EmpLeaveComponent, EmpApplyLeaveComponent, EmpPayslipsComponent, EmpTasksComponent,
    EmpPerformanceComponent, EmpDocumentsComponent, EmpAnnouncementsComponent, EmpNotificationsComponent,
    EmpBreakTrackerComponent, EmpDailyWorkUpdateComponent, EmpProjectsComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EmployeeRoutingModule, SharedModule]
})
export class EmployeeModule {}

