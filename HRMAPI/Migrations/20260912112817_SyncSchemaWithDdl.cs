using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRMAPI.Migrations
{
    /// <inheritdoc />
    public partial class SyncSchemaWithDdl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PPT",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "RoleId",
                table: "Users",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "TotalEmployees",
                table: "Teams",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "RoleId",
                table: "RolePermissions",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Modules",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Features",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsVisibleInSidebar",
                table: "Features",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<string>(
                name: "Role",
                table: "FeatureRoles",
                type: "character varying(20)",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(20)",
                oldMaxLength: 20);

            migrationBuilder.AddColumn<bool>(
                name: "CanCreate",
                table: "FeatureRoles",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CanDelete",
                table: "FeatureRoles",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CanRead",
                table: "FeatureRoles",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CanUpdate",
                table: "FeatureRoles",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "BranchName",
                table: "Employees",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TotalEmployees",
                table: "Designations",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Media",
                table: "DailyWorkUpdates",
                type: "jsonb",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CompanyId",
                table: "Branches",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_RolePermissions_RoleId",
                table: "RolePermissions",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Branches_CompanyId",
                table: "Branches",
                column: "CompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Branches_CompanyProfiles_CompanyId",
                table: "Branches",
                column: "CompanyId",
                principalTable: "CompanyProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_RolePermissions_Roles_RoleId",
                table: "RolePermissions",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Roles_RoleId",
                table: "Users",
                column: "RoleId",
                principalTable: "Roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Branches_CompanyProfiles_CompanyId",
                table: "Branches");

            migrationBuilder.DropForeignKey(
                name: "FK_RolePermissions_Roles_RoleId",
                table: "RolePermissions");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Roles_RoleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_RoleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_RolePermissions_RoleId",
                table: "RolePermissions");

            migrationBuilder.DropIndex(
                name: "IX_Branches_CompanyId",
                table: "Branches");

            migrationBuilder.DropColumn(
                name: "PPT",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "RoleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "TotalEmployees",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "RoleId",
                table: "RolePermissions");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "IsVisibleInSidebar",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "CanCreate",
                table: "FeatureRoles");

            migrationBuilder.DropColumn(
                name: "CanDelete",
                table: "FeatureRoles");

            migrationBuilder.DropColumn(
                name: "CanRead",
                table: "FeatureRoles");

            migrationBuilder.DropColumn(
                name: "CanUpdate",
                table: "FeatureRoles");

            migrationBuilder.DropColumn(
                name: "BranchName",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "TotalEmployees",
                table: "Designations");

            migrationBuilder.DropColumn(
                name: "Media",
                table: "DailyWorkUpdates");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "Branches");

            migrationBuilder.AlterColumn<string>(
                name: "Role",
                table: "FeatureRoles",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(20)",
                oldMaxLength: 20,
                oldNullable: true);
        }
    }
}
