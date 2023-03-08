using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CharacterManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class fleshOutMagicItemTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Category",
                table: "Items",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Property1",
                table: "Items",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Property2",
                table: "Items",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Property3",
                table: "Items",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Rarity",
                table: "Items",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Property1",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Property2",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Property3",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Rarity",
                table: "Items");
        }
    }
}
