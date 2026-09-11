import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: EmpDashboardComponent },
  { path: 'my-profile', component: EmpProfileComponent },
  { path: 'my-attendance', component: EmpAttendanceComponent },
  { path: 'check-in-out', component: EmpCheckInOutComponent },
  { path: 'break-tracker', component: EmpBreakTrackerComponent },
  { path: 'daily-work-update', component: EmpDailyWorkUpdateComponent },
  { path: 'my-leave', component: EmpLeaveComponent },
  { path: 'apply-leave', component: EmpApplyLeaveComponent },
  { path: 'my-payslips', component: EmpPayslipsComponent },
  { path: 'my-tasks', component: EmpTasksComponent },
  { path: 'my-performance', component: EmpPerformanceComponent },
  { path: 'my-documents', component: EmpDocumentsComponent },
  { path: 'announcements', component: EmpAnnouncementsComponent },
  { path: 'notifications', component: EmpNotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}

