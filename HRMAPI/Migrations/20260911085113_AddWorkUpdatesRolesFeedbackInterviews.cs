using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRMAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddWorkUpdatesRolesFeedbackInterviews : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DailyWorkUpdates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    TasksCompleted = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    WorkSummary = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    IssuesBlockers = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    HoursWorked = table.Column<decimal>(type: "numeric(5,2)", precision: 5, scale: 2, nullable: true),
                    Status = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyWorkUpdates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DailyWorkUpdates_Employees_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Interviews",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CandidateId = table.Column<Guid>(type: "uuid", nullable: false),
                    JobId = table.Column<Guid>(type: "uuid", nullable: false),
                    InterviewerId = table.Column<Guid>(type: "uuid", nullable: true),
                    ScheduledAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Round = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    InterviewType = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    Status = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    DurationMinutes = table.Column<int>(type: "integer", nullable: true),
                    MeetingLink = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Feedback = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    Rating = table.Column<int>(type: "integer", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Interviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Interviews_Candidates_CandidateId",
                        column: x => x.CandidateId,
                        principalTable: "Candidates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Interviews_Employees_InterviewerId",
                        column: x => x.InterviewerId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_Interviews_JobOpenings_JobId",
                        column: x => x.JobId,
                        principalTable: "JobOpenings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PerformanceFeedbacks",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TargetEmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReviewerId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReviewPeriod = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    Category = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    Rating = table.Column<int>(type: "integer", nullable: false),
                    Comments = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PerformanceFeedbacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PerformanceFeedbacks_Employees_TargetEmployeeId",
                        column: x => x.TargetEmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PerformanceFeedbacks_Users_ReviewerId",
                        column: x => x.ReviewerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RolePermissions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Role = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    Module = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Action = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolePermissions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DailyWorkUpdates_EmployeeId_Date",
                table: "DailyWorkUpdates",
                columns: new[] { "EmployeeId", "Date" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Interviews_CandidateId",
                table: "Interviews",
                column: "CandidateId");

            migrationBuilder.CreateIndex(
                name: "IX_Interviews_InterviewerId",
                table: "Interviews",
                column: "InterviewerId");

            migrationBuilder.CreateIndex(
                name: "IX_Interviews_JobId",
                table: "Interviews",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_PerformanceFeedbacks_ReviewerId",
                table: "PerformanceFeedbacks",
                column: "ReviewerId");

            migrationBuilder.CreateIndex(
                name: "IX_PerformanceFeedbacks_TargetEmployeeId",
                table: "PerformanceFeedbacks",
                column: "TargetEmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_RolePermissions_Role_Module_Action",
                table: "RolePermissions",
                columns: new[] { "Role", "Module", "Action" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DailyWorkUpdates");

            migrationBuilder.DropTable(
                name: "Interviews");

            migrationBuilder.DropTable(
                name: "PerformanceFeedbacks");

            migrationBuilder.DropTable(
                name: "RolePermissions");
        }
    }
}

