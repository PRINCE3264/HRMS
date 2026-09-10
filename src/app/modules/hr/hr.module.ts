import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HrDashboardComponent } from './dashboard/dashboard.component';
import { HrEmployeesComponent } from './employees/employees.component';
import { HrDepartmentsComponent } from './departments/departments.component';
import { HrTeamsComponent } from './teams/teams.component';
import { HrAttendanceComponent } from './attendance/attendance.component';
import { HrLeaveComponent } from './leave-management/leave-management.component';
import { HrShiftComponent } from './shift-management/shift-management.component';
import { HrPayrollComponent } from './payroll/payroll.component';
import { HrRecruitmentComponent } from './recruitment/recruitment.component';
import { HrOnboardingComponent } from './onboarding/onboarding.component';
import { HrPerformanceComponent } from './performance/performance.component';
import { HrTrainingComponent } from './training/training.component';
import { HrDocumentsComponent } from './documents/documents.component';
import { HrAnnouncementsComponent } from './announcements/announcements.component';
import { HrReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    HrDashboardComponent, HrEmployeesComponent, HrDepartmentsComponent, HrTeamsComponent,
    HrAttendanceComponent, HrLeaveComponent, HrShiftComponent, HrPayrollComponent,
    HrRecruitmentComponent, HrOnboardingComponent, HrPerformanceComponent, HrTrainingComponent,
    HrDocumentsComponent, HrAnnouncementsComponent, HrReportsComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HrRoutingModule, SharedModule]
})
export class HrModule {}
