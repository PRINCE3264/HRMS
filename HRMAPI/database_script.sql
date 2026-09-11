CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL,
    CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
);

START TRANSACTION;

CREATE TABLE "Branches" (
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Code" character varying(20) NOT NULL,
    "Address" character varying(500),
    "City" character varying(100) NOT NULL,
    "State" character varying(100) NOT NULL,
    "Country" character varying(100) NOT NULL,
    "Phone" character varying(20),
    "Email" character varying(255),
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Branches" PRIMARY KEY ("Id")
);

CREATE TABLE "Shifts" (
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "StartTime" time(0) without time zone NOT NULL,
    "EndTime" time(0) without time zone NOT NULL,
    "BreakMinutes" integer NOT NULL,
    "Description" character varying(500),
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Shifts" PRIMARY KEY ("Id")
);

CREATE TABLE "Trainings" (
    "Id" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Description" character varying(2000),
    "Trainer" character varying(200) NOT NULL,
    "Department" character varying(200),
    "StartDate" timestamp with time zone NOT NULL,
    "EndDate" timestamp with time zone NOT NULL,
    "Duration" character varying(50),
    "Location" character varying(200),
    "MaxParticipants" integer NOT NULL,
    "Status" character varying(20) NOT NULL,
    "Type" character varying(20) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Trainings" PRIMARY KEY ("Id")
);

CREATE TABLE "AnnouncementAttachments" (
    "Id" uuid NOT NULL,
    "AnnouncementId" uuid NOT NULL,
    "FileName" character varying(500) NOT NULL,
    "FileUrl" character varying(1000) NOT NULL,
    CONSTRAINT "PK_AnnouncementAttachments" PRIMARY KEY ("Id")
);

CREATE TABLE "Announcements" (
    "Id" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Content" character varying(5000) NOT NULL,
    "AuthorId" uuid NOT NULL,
    "Priority" character varying(20) NOT NULL,
    "TargetAudience" character varying(500),
    "PublishedDate" timestamp with time zone NOT NULL,
    "ExpiryDate" timestamp with time zone,
    "IsPinned" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Announcements" PRIMARY KEY ("Id")
);

CREATE TABLE "Attendances" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "Date" timestamp with time zone NOT NULL,
    "CheckIn" timestamp with time zone,
    "CheckOut" timestamp with time zone,
    "WorkHours" numeric NOT NULL,
    "Overtime" numeric NOT NULL,
    "Status" character varying(20) NOT NULL,
    "Location" character varying(200),
    "Latitude" numeric(10,7),
    "Longitude" numeric(10,7),
    "Notes" character varying(500),
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Attendances" PRIMARY KEY ("Id")
);

CREATE TABLE "BreakRecords" (
    "Id" uuid NOT NULL,
    "AttendanceId" uuid NOT NULL,
    "StartTime" timestamp with time zone NOT NULL,
    "EndTime" timestamp with time zone,
    "BreakType" character varying(20) NOT NULL,
    "DurationMinutes" numeric NOT NULL,
    "Reason" character varying(200),
    CONSTRAINT "PK_BreakRecords" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_BreakRecords_Attendances_AttendanceId" FOREIGN KEY ("AttendanceId") REFERENCES "Attendances" ("Id") ON DELETE CASCADE
);

CREATE TABLE "AuditLogs" (
    "Id" uuid NOT NULL,
    "UserId" uuid NOT NULL,
    "Action" character varying(100) NOT NULL,
    "Module" character varying(100) NOT NULL,
    "Details" character varying(2000),
    "IpAddress" character varying(100),
    "Timestamp" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_AuditLogs" PRIMARY KEY ("Id")
);

CREATE TABLE "Candidates" (
    "Id" uuid NOT NULL,
    "FirstName" character varying(100) NOT NULL,
    "LastName" character varying(100) NOT NULL,
    "Email" character varying(255) NOT NULL,
    "Phone" character varying(20),
    "JobId" uuid NOT NULL,
    "ResumeUrl" character varying(500),
    "CoverLetter" character varying(5000),
    "Source" character varying(100),
    "Status" character varying(30) NOT NULL,
    "Rating" integer,
    "Notes" character varying(2000),
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Candidates" PRIMARY KEY ("Id")
);

CREATE TABLE "Departments" (
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Code" character varying(20) NOT NULL,
    "Description" character varying(500),
    "HeadId" uuid,
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Departments" PRIMARY KEY ("Id")
);

CREATE TABLE "Designations" (
    "Id" uuid NOT NULL,
    "Title" character varying(100) NOT NULL,
    "Level" character varying(50) NOT NULL,
    "DepartmentId" uuid,
    "MinSalary" numeric(18,2),
    "MaxSalary" numeric(18,2),
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Designations" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Designations_Departments_DepartmentId" FOREIGN KEY ("DepartmentId") REFERENCES "Departments" ("Id") ON DELETE SET NULL
);

CREATE TABLE "JobOpenings" (
    "Id" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "DepartmentId" uuid NOT NULL,
    "DesignationId" uuid NOT NULL,
    "BranchId" uuid NOT NULL,
    "EmploymentType" character varying(20) NOT NULL,
    "Experience" character varying(100),
    "SalaryRange" character varying(100),
    "Description" character varying(5000),
    "Requirements" character varying(5000),
    "Vacancies" integer NOT NULL,
    "Status" character varying(20) NOT NULL,
    "PostedDate" timestamp with time zone NOT NULL,
    "ClosingDate" timestamp with time zone,
    CONSTRAINT "PK_JobOpenings" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_JobOpenings_Branches_BranchId" FOREIGN KEY ("BranchId") REFERENCES "Branches" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_JobOpenings_Departments_DepartmentId" FOREIGN KEY ("DepartmentId") REFERENCES "Departments" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_JobOpenings_Designations_DesignationId" FOREIGN KEY ("DesignationId") REFERENCES "Designations" ("Id") ON DELETE RESTRICT
);

CREATE TABLE "Documents" (
    "Id" uuid NOT NULL,
    "Name" character varying(200) NOT NULL,
    "Type" character varying(50) NOT NULL,
    "Category" character varying(20) NOT NULL,
    "EmployeeId" uuid,
    "UploadedById" uuid NOT NULL,
    "UploadedAt" timestamp with time zone NOT NULL,
    "FileSize" bigint NOT NULL,
    "FileUrl" character varying(1000) NOT NULL,
    CONSTRAINT "PK_Documents" PRIMARY KEY ("Id")
);

CREATE TABLE "Employees" (
    "Id" uuid NOT NULL,
    "EmployeeId" character varying(50) NOT NULL,
    "FirstName" character varying(100) NOT NULL,
    "LastName" character varying(100) NOT NULL,
    "Email" character varying(255) NOT NULL,
    "Phone" character varying(20),
    "DateOfBirth" timestamp with time zone,
    "Gender" character varying(20),
    "MaritalStatus" character varying(20),
    "Nationality" character varying(100),
    "Avatar" text,
    "DepartmentId" uuid NOT NULL,
    "DesignationId" uuid NOT NULL,
    "BranchId" uuid NOT NULL,
    "TeamId" uuid,
    "ReportingManagerId" uuid,
    "JoiningDate" timestamp with time zone NOT NULL,
    "EmploymentType" character varying(20) NOT NULL,
    "EmploymentStatus" character varying(20) NOT NULL,
    "WorkLocation" character varying(100),
    "Address" character varying(500),
    "City" character varying(100),
    "State" character varying(100),
    "Country" character varying(100),
    "ZipCode" character varying(20),
    "EmergencyContactName" character varying(200),
    "EmergencyContactPhone" character varying(20),
    "EmergencyContactRelation" character varying(50),
    "BankName" character varying(200),
    "BankAccountNumber" character varying(50),
    "IfscCode" character varying(50),
    "TaxId" character varying(50),
    "Salary" numeric(18,2),
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Employees" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Employees_Branches_BranchId" FOREIGN KEY ("BranchId") REFERENCES "Branches" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_Employees_Departments_DepartmentId" FOREIGN KEY ("DepartmentId") REFERENCES "Departments" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_Employees_Designations_DesignationId" FOREIGN KEY ("DesignationId") REFERENCES "Designations" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_Employees_Employees_ReportingManagerId" FOREIGN KEY ("ReportingManagerId") REFERENCES "Employees" ("Id") ON DELETE SET NULL
);

CREATE TABLE "KPIs" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Description" character varying(1000),
    "TargetValue" numeric(18,2) NOT NULL,
    "CurrentValue" numeric(18,2) NOT NULL,
    "Unit" character varying(50),
    "Weight" numeric(5,2) NOT NULL,
    "Period" character varying(50) NOT NULL,
    "Status" character varying(50) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_KPIs" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_KPIs_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE
);

CREATE TABLE "LeaveBalances" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "LeaveType" character varying(20) NOT NULL,
    "Entitled" integer NOT NULL,
    "Taken" integer NOT NULL,
    "Remaining" integer NOT NULL,
    "Year" integer NOT NULL,
    CONSTRAINT "PK_LeaveBalances" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_LeaveBalances_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE
);

CREATE TABLE "Onboardings" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "StartDate" timestamp with time zone NOT NULL,
    "EndDate" timestamp with time zone,
    "MentorId" uuid,
    "Status" character varying(20) NOT NULL,
    "Progress" numeric(5,2) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Onboardings" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Onboardings_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_Onboardings_Employees_MentorId" FOREIGN KEY ("MentorId") REFERENCES "Employees" ("Id") ON DELETE SET NULL
);

CREATE TABLE "PayrollRecords" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "Month" character varying(20) NOT NULL,
    "Year" integer NOT NULL,
    "BasicSalary" numeric(18,2) NOT NULL,
    "Allowances" numeric(18,2) NOT NULL,
    "Deductions" numeric(18,2) NOT NULL,
    "NetPay" numeric(18,2) NOT NULL,
    "Status" character varying(20) NOT NULL,
    "PaidDate" timestamp with time zone,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_PayrollRecords" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_PayrollRecords_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE
);

CREATE TABLE "ShiftAssignments" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "ShiftId" uuid NOT NULL,
    "StartDate" timestamp with time zone NOT NULL,
    "EndDate" timestamp with time zone,
    CONSTRAINT "PK_ShiftAssignments" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_ShiftAssignments_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_ShiftAssignments_Shifts_ShiftId" FOREIGN KEY ("ShiftId") REFERENCES "Shifts" ("Id") ON DELETE CASCADE
);

CREATE TABLE "TaskAssignments" (
    "Id" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Description" character varying(2000),
    "AssignedToId" uuid NOT NULL,
    "AssignedById" uuid NOT NULL,
    "Priority" character varying(20) NOT NULL,
    "Status" character varying(20) NOT NULL,
    "DueDate" timestamp with time zone NOT NULL,
    "CompletedDate" timestamp with time zone,
    "EstimatedHours" numeric,
    "ActualHours" numeric,
    "Rating" integer,
    "ReviewComments" character varying(1000),
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_TaskAssignments" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_TaskAssignments_Employees_AssignedById" FOREIGN KEY ("AssignedById") REFERENCES "Employees" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_TaskAssignments_Employees_AssignedToId" FOREIGN KEY ("AssignedToId") REFERENCES "Employees" ("Id") ON DELETE RESTRICT
);

CREATE TABLE "Teams" (
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "DepartmentId" uuid NOT NULL,
    "TeamLeadId" uuid NOT NULL,
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Teams" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Teams_Departments_DepartmentId" FOREIGN KEY ("DepartmentId") REFERENCES "Departments" ("Id") ON DELETE RESTRICT,
    CONSTRAINT "FK_Teams_Employees_TeamLeadId" FOREIGN KEY ("TeamLeadId") REFERENCES "Employees" ("Id") ON DELETE RESTRICT
);

CREATE TABLE "TrainingEnrollments" (
    "Id" uuid NOT NULL,
    "TrainingId" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "EnrolledAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_TrainingEnrollments" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_TrainingEnrollments_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_TrainingEnrollments_Trainings_TrainingId" FOREIGN KEY ("TrainingId") REFERENCES "Trainings" ("Id") ON DELETE CASCADE
);

CREATE TABLE "Users" (
    "Id" uuid NOT NULL,
    "FirstName" character varying(100) NOT NULL,
    "LastName" character varying(100) NOT NULL,
    "Email" character varying(255) NOT NULL,
    "PasswordHash" text NOT NULL,
    "Role" character varying(20) NOT NULL,
    "Avatar" text,
    "Department" text,
    "Designation" text,
    "Branch" text,
    "EmployeeId" uuid,
    "IsActive" boolean NOT NULL,
    "MfaEnabled" boolean NOT NULL,
    "RefreshToken" text,
    "RefreshTokenExpiry" timestamp with time zone,
    "LastLoginAt" timestamp with time zone,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Users" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Users_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id")
);

CREATE TABLE "OnboardingTasks" (
    "Id" uuid NOT NULL,
    "OnboardingId" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Description" character varying(500),
    "IsCompleted" boolean NOT NULL,
    "CompletedAt" timestamp with time zone,
    "AssignedTo" character varying(200),
    CONSTRAINT "PK_OnboardingTasks" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_OnboardingTasks_Onboardings_OnboardingId" FOREIGN KEY ("OnboardingId") REFERENCES "Onboardings" ("Id") ON DELETE CASCADE
);

CREATE TABLE "Payslips" (
    "Id" uuid NOT NULL,
    "PayrollId" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "Month" character varying(20) NOT NULL,
    "Year" integer NOT NULL,
    "BasicSalary" numeric(18,2) NOT NULL,
    "Hra" numeric(18,2) NOT NULL,
    "Conveyance" numeric(18,2) NOT NULL,
    "MedicalAllowance" numeric(18,2) NOT NULL,
    "SpecialAllowance" numeric(18,2) NOT NULL,
    "Pf" numeric(18,2) NOT NULL,
    "Esi" numeric(18,2) NOT NULL,
    "Tds" numeric(18,2) NOT NULL,
    "ProfessionalTax" numeric(18,2) NOT NULL,
    "TotalEarnings" numeric(18,2) NOT NULL,
    "TotalDeductions" numeric(18,2) NOT NULL,
    "NetPay" numeric(18,2) NOT NULL,
    CONSTRAINT "PK_Payslips" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Payslips_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_Payslips_PayrollRecords_PayrollId" FOREIGN KEY ("PayrollId") REFERENCES "PayrollRecords" ("Id") ON DELETE CASCADE
);

CREATE TABLE "LeaveRequests" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "LeaveType" character varying(20) NOT NULL,
    "StartDate" timestamp with time zone NOT NULL,
    "EndDate" timestamp with time zone NOT NULL,
    "TotalDays" integer NOT NULL,
    "Reason" character varying(500) NOT NULL,
    "Status" character varying(20) NOT NULL,
    "ApprovedById" uuid,
    "ApprovedAt" timestamp with time zone,
    "Comments" character varying(500),
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_LeaveRequests" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_LeaveRequests_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_LeaveRequests_Users_ApprovedById" FOREIGN KEY ("ApprovedById") REFERENCES "Users" ("Id") ON DELETE SET NULL
);

CREATE TABLE "Notifications" (
    "Id" uuid NOT NULL,
    "UserId" uuid NOT NULL,
    "Title" character varying(200) NOT NULL,
    "Message" character varying(1000) NOT NULL,
    "Type" character varying(20) NOT NULL,
    "IsRead" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "Link" character varying(500),
    CONSTRAINT "PK_Notifications" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Notifications_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users" ("Id") ON DELETE CASCADE
);

CREATE TABLE "PerformanceReviews" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "ReviewerId" uuid NOT NULL,
    "Period" character varying(50) NOT NULL,
    "OverallRating" numeric(5,2) NOT NULL,
    "GoalsRating" numeric(5,2) NOT NULL,
    "CompetencyRating" numeric(5,2) NOT NULL,
    "Comments" character varying(2000),
    "Status" character varying(20) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_PerformanceReviews" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_PerformanceReviews_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_PerformanceReviews_Users_ReviewerId" FOREIGN KEY ("ReviewerId") REFERENCES "Users" ("Id") ON DELETE RESTRICT
);

CREATE TABLE "SystemSettings" (
    "Id" uuid NOT NULL,
    "Key" character varying(200) NOT NULL,
    "Value" character varying(2000) NOT NULL,
    "Category" character varying(100) NOT NULL,
    "Description" character varying(500),
    "UpdatedById" uuid,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_SystemSettings" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_SystemSettings_Users_UpdatedById" FOREIGN KEY ("UpdatedById") REFERENCES "Users" ("Id") ON DELETE SET NULL
);

CREATE TABLE "UserPermissions" (
    "Id" uuid NOT NULL,
    "UserId" uuid NOT NULL,
    "Module" character varying(100) NOT NULL,
    "Action" character varying(20) NOT NULL,
    CONSTRAINT "PK_UserPermissions" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_UserPermissions_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users" ("Id") ON DELETE CASCADE
);

CREATE INDEX "IX_AnnouncementAttachments_AnnouncementId" ON "AnnouncementAttachments" ("AnnouncementId");

CREATE INDEX "IX_Announcements_AuthorId" ON "Announcements" ("AuthorId");

CREATE UNIQUE INDEX "IX_Attendances_EmployeeId_Date" ON "Attendances" ("EmployeeId", "Date");

CREATE INDEX "IX_AuditLogs_Timestamp" ON "AuditLogs" ("Timestamp");

CREATE INDEX "IX_AuditLogs_UserId" ON "AuditLogs" ("UserId");

CREATE UNIQUE INDEX "IX_Branches_Code" ON "Branches" ("Code");

CREATE UNIQUE INDEX "IX_Branches_Name" ON "Branches" ("Name");

CREATE INDEX "IX_BreakRecords_AttendanceId" ON "BreakRecords" ("AttendanceId");

CREATE INDEX "IX_Candidates_JobId" ON "Candidates" ("JobId");

CREATE UNIQUE INDEX "IX_Departments_Code" ON "Departments" ("Code");

CREATE INDEX "IX_Departments_HeadId" ON "Departments" ("HeadId");

CREATE UNIQUE INDEX "IX_Departments_Name" ON "Departments" ("Name");

CREATE INDEX "IX_Designations_DepartmentId" ON "Designations" ("DepartmentId");

CREATE INDEX "IX_Documents_EmployeeId" ON "Documents" ("EmployeeId");

CREATE INDEX "IX_Documents_UploadedById" ON "Documents" ("UploadedById");

CREATE INDEX "IX_Employees_BranchId" ON "Employees" ("BranchId");

CREATE INDEX "IX_Employees_DepartmentId" ON "Employees" ("DepartmentId");

CREATE INDEX "IX_Employees_DesignationId" ON "Employees" ("DesignationId");

CREATE UNIQUE INDEX "IX_Employees_Email" ON "Employees" ("Email");

CREATE UNIQUE INDEX "IX_Employees_EmployeeId" ON "Employees" ("EmployeeId");

CREATE INDEX "IX_Employees_ReportingManagerId" ON "Employees" ("ReportingManagerId");

CREATE INDEX "IX_Employees_TeamId" ON "Employees" ("TeamId");

CREATE INDEX "IX_JobOpenings_BranchId" ON "JobOpenings" ("BranchId");

CREATE INDEX "IX_JobOpenings_DepartmentId" ON "JobOpenings" ("DepartmentId");

CREATE INDEX "IX_JobOpenings_DesignationId" ON "JobOpenings" ("DesignationId");

CREATE INDEX "IX_KPIs_EmployeeId" ON "KPIs" ("EmployeeId");

CREATE UNIQUE INDEX "IX_LeaveBalances_EmployeeId_LeaveType_Year" ON "LeaveBalances" ("EmployeeId", "LeaveType", "Year");

CREATE INDEX "IX_LeaveRequests_ApprovedById" ON "LeaveRequests" ("ApprovedById");

CREATE INDEX "IX_LeaveRequests_EmployeeId" ON "LeaveRequests" ("EmployeeId");

CREATE INDEX "IX_Notifications_UserId_IsRead" ON "Notifications" ("UserId", "IsRead");

CREATE INDEX "IX_Onboardings_EmployeeId" ON "Onboardings" ("EmployeeId");

CREATE INDEX "IX_Onboardings_MentorId" ON "Onboardings" ("MentorId");

CREATE INDEX "IX_OnboardingTasks_OnboardingId" ON "OnboardingTasks" ("OnboardingId");

CREATE INDEX "IX_PayrollRecords_EmployeeId" ON "PayrollRecords" ("EmployeeId");

CREATE INDEX "IX_Payslips_EmployeeId" ON "Payslips" ("EmployeeId");

CREATE UNIQUE INDEX "IX_Payslips_PayrollId" ON "Payslips" ("PayrollId");

CREATE INDEX "IX_PerformanceReviews_EmployeeId" ON "PerformanceReviews" ("EmployeeId");

CREATE INDEX "IX_PerformanceReviews_ReviewerId" ON "PerformanceReviews" ("ReviewerId");

CREATE INDEX "IX_ShiftAssignments_EmployeeId" ON "ShiftAssignments" ("EmployeeId");

CREATE INDEX "IX_ShiftAssignments_ShiftId" ON "ShiftAssignments" ("ShiftId");

CREATE UNIQUE INDEX "IX_SystemSettings_Key" ON "SystemSettings" ("Key");

CREATE INDEX "IX_SystemSettings_UpdatedById" ON "SystemSettings" ("UpdatedById");

CREATE INDEX "IX_TaskAssignments_AssignedById" ON "TaskAssignments" ("AssignedById");

CREATE INDEX "IX_TaskAssignments_AssignedToId" ON "TaskAssignments" ("AssignedToId");

CREATE INDEX "IX_Teams_DepartmentId" ON "Teams" ("DepartmentId");

CREATE INDEX "IX_Teams_TeamLeadId" ON "Teams" ("TeamLeadId");

CREATE INDEX "IX_TrainingEnrollments_EmployeeId" ON "TrainingEnrollments" ("EmployeeId");

CREATE UNIQUE INDEX "IX_TrainingEnrollments_TrainingId_EmployeeId" ON "TrainingEnrollments" ("TrainingId", "EmployeeId");

CREATE UNIQUE INDEX "IX_UserPermissions_UserId_Module_Action" ON "UserPermissions" ("UserId", "Module", "Action");

CREATE UNIQUE INDEX "IX_Users_Email" ON "Users" ("Email");

CREATE INDEX "IX_Users_EmployeeId" ON "Users" ("EmployeeId");

ALTER TABLE "AnnouncementAttachments" ADD CONSTRAINT "FK_AnnouncementAttachments_Announcements_AnnouncementId" FOREIGN KEY ("AnnouncementId") REFERENCES "Announcements" ("Id") ON DELETE CASCADE;

ALTER TABLE "Announcements" ADD CONSTRAINT "FK_Announcements_Users_AuthorId" FOREIGN KEY ("AuthorId") REFERENCES "Users" ("Id") ON DELETE RESTRICT;

ALTER TABLE "Attendances" ADD CONSTRAINT "FK_Attendances_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE;

ALTER TABLE "AuditLogs" ADD CONSTRAINT "FK_AuditLogs_Users_UserId" FOREIGN KEY ("UserId") REFERENCES "Users" ("Id") ON DELETE RESTRICT;

ALTER TABLE "Candidates" ADD CONSTRAINT "FK_Candidates_JobOpenings_JobId" FOREIGN KEY ("JobId") REFERENCES "JobOpenings" ("Id") ON DELETE CASCADE;

ALTER TABLE "Departments" ADD CONSTRAINT "FK_Departments_Employees_HeadId" FOREIGN KEY ("HeadId") REFERENCES "Employees" ("Id") ON DELETE SET NULL;

ALTER TABLE "Documents" ADD CONSTRAINT "FK_Documents_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE SET NULL;

ALTER TABLE "Documents" ADD CONSTRAINT "FK_Documents_Users_UploadedById" FOREIGN KEY ("UploadedById") REFERENCES "Users" ("Id") ON DELETE RESTRICT;

ALTER TABLE "Employees" ADD CONSTRAINT "FK_Employees_Teams_TeamId" FOREIGN KEY ("TeamId") REFERENCES "Teams" ("Id") ON DELETE SET NULL;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20260911073624_InitialCreate', '8.0.0');

COMMIT;

START TRANSACTION;

CREATE TABLE "DailyWorkUpdates" (
    "Id" uuid NOT NULL,
    "EmployeeId" uuid NOT NULL,
    "Date" timestamp with time zone NOT NULL,
    "TasksCompleted" character varying(2000),
    "WorkSummary" character varying(2000),
    "IssuesBlockers" character varying(2000),
    "HoursWorked" numeric(5,2),
    "Status" character varying(20) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_DailyWorkUpdates" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_DailyWorkUpdates_Employees_EmployeeId" FOREIGN KEY ("EmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE
);

CREATE TABLE "Interviews" (
    "Id" uuid NOT NULL,
    "CandidateId" uuid NOT NULL,
    "JobId" uuid NOT NULL,
    "InterviewerId" uuid,
    "ScheduledAt" timestamp with time zone NOT NULL,
    "Round" character varying(50) NOT NULL,
    "InterviewType" character varying(20) NOT NULL,
    "Status" character varying(20) NOT NULL,
    "DurationMinutes" integer,
    "MeetingLink" character varying(500),
    "Feedback" character varying(2000),
    "Rating" integer,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Interviews" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_Interviews_Candidates_CandidateId" FOREIGN KEY ("CandidateId") REFERENCES "Candidates" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_Interviews_Employees_InterviewerId" FOREIGN KEY ("InterviewerId") REFERENCES "Employees" ("Id") ON DELETE SET NULL,
    CONSTRAINT "FK_Interviews_JobOpenings_JobId" FOREIGN KEY ("JobId") REFERENCES "JobOpenings" ("Id") ON DELETE CASCADE
);

CREATE TABLE "PerformanceFeedbacks" (
    "Id" uuid NOT NULL,
    "TargetEmployeeId" uuid NOT NULL,
    "ReviewerId" uuid NOT NULL,
    "ReviewPeriod" character varying(50) NOT NULL,
    "Category" character varying(20) NOT NULL,
    "Rating" integer NOT NULL,
    "Comments" character varying(2000),
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_PerformanceFeedbacks" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_PerformanceFeedbacks_Employees_TargetEmployeeId" FOREIGN KEY ("TargetEmployeeId") REFERENCES "Employees" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_PerformanceFeedbacks_Users_ReviewerId" FOREIGN KEY ("ReviewerId") REFERENCES "Users" ("Id") ON DELETE RESTRICT
);

CREATE TABLE "RolePermissions" (
    "Id" uuid NOT NULL,
    "Role" character varying(20) NOT NULL,
    "Module" character varying(100) NOT NULL,
    "Action" character varying(20) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_RolePermissions" PRIMARY KEY ("Id")
);

CREATE UNIQUE INDEX "IX_DailyWorkUpdates_EmployeeId_Date" ON "DailyWorkUpdates" ("EmployeeId", "Date");

CREATE INDEX "IX_Interviews_CandidateId" ON "Interviews" ("CandidateId");

CREATE INDEX "IX_Interviews_InterviewerId" ON "Interviews" ("InterviewerId");

CREATE INDEX "IX_Interviews_JobId" ON "Interviews" ("JobId");

CREATE INDEX "IX_PerformanceFeedbacks_ReviewerId" ON "PerformanceFeedbacks" ("ReviewerId");

CREATE INDEX "IX_PerformanceFeedbacks_TargetEmployeeId" ON "PerformanceFeedbacks" ("TargetEmployeeId");

CREATE UNIQUE INDEX "IX_RolePermissions_Role_Module_Action" ON "RolePermissions" ("Role", "Module", "Action");

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20260911085113_AddWorkUpdatesRolesFeedbackInterviews', '8.0.0');

COMMIT;

START TRANSACTION;

CREATE TABLE "AppModules" (
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Icon" character varying(100) NOT NULL,
    "DisplayOrder" integer NOT NULL,
    "IsActive" boolean NOT NULL,
    CONSTRAINT "PK_AppModules" PRIMARY KEY ("Id")
);

CREATE TABLE "AppFeatures" (
    "Id" uuid NOT NULL,
    "ModuleId" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Path" character varying(200) NOT NULL,
    "Icon" character varying(100) NOT NULL,
    "DisplayOrder" integer NOT NULL,
    "IsActive" boolean NOT NULL,
    CONSTRAINT "PK_AppFeatures" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_AppFeatures_AppModules_ModuleId" FOREIGN KEY ("ModuleId") REFERENCES "AppModules" ("Id") ON DELETE CASCADE
);

CREATE TABLE "FeatureRoles" (
    "Id" uuid NOT NULL,
    "FeatureId" uuid NOT NULL,
    "Role" character varying(20) NOT NULL,
    CONSTRAINT "PK_FeatureRoles" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_FeatureRoles_AppFeatures_FeatureId" FOREIGN KEY ("FeatureId") REFERENCES "AppFeatures" ("Id") ON DELETE CASCADE
);

CREATE INDEX "IX_AppFeatures_ModuleId" ON "AppFeatures" ("ModuleId");

CREATE UNIQUE INDEX "IX_FeatureRoles_FeatureId_Role" ON "FeatureRoles" ("FeatureId", "Role");

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20260911095023_AddNavigationModels', '8.0.0');

COMMIT;

