using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRMAPI.Migrations
{
    /// <inheritdoc />
    public partial class RenameModuleRollIdToRoleId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RollId",
                table: "Modules",
                newName: "RoleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoleId",
                table: "Modules",
                newName: "RollId");
        }
    }
}