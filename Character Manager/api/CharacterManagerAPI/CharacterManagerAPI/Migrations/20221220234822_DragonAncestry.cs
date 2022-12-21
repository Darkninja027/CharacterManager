using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CharacterManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class DragonAncestry : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Races",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "DragonAncestries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Dragon = table.Column<int>(type: "int", nullable: false),
                    BreathSave = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level5 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level11 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Level17 = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DragonAncestries", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DragonAncestries");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Races");
        }
    }
}
