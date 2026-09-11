using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HRMAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddNavigationModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppModules",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Icon = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    DisplayOrder = table.Column<int>(type: "integer", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppModules", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppFeatures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ModuleId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Path = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Icon = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    DisplayOrder = table.Column<int>(type: "integer", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppFeatures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppFeatures_AppModules_ModuleId",
                        column: x => x.ModuleId,
                        principalTable: "AppModules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FeatureRoles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FeatureId = table.Column<Guid>(type: "uuid", nullable: false),
                    Role = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeatureRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FeatureRoles_AppFeatures_FeatureId",
                        column: x => x.FeatureId,
                        principalTable: "AppFeatures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppFeatures_ModuleId",
                table: "AppFeatures",
                column: "ModuleId");

            migrationBuilder.CreateIndex(
                name: "IX_FeatureRoles_FeatureId_Role",
                table: "FeatureRoles",
                columns: new[] { "FeatureId", "Role" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FeatureRoles");

            migrationBuilder.DropTable(
                name: "AppFeatures");

            migrationBuilder.DropTable(
                name: "AppModules");
        }
    }
}

