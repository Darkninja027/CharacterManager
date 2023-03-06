using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CharacterManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class DragonAncestryRaceRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DragonAncestryId",
                table: "Races",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Races_DragonAncestryId",
                table: "Races",
                column: "DragonAncestryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Races_DragonAncestries_DragonAncestryId",
                table: "Races",
                column: "DragonAncestryId",
                principalTable: "DragonAncestries",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Races_DragonAncestries_DragonAncestryId",
                table: "Races");

            migrationBuilder.DropIndex(
                name: "IX_Races_DragonAncestryId",
                table: "Races");

            migrationBuilder.DropColumn(
                name: "DragonAncestryId",
                table: "Races");
        }
    }
}
