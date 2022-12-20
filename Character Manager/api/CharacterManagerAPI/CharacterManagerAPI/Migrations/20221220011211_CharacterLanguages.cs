using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CharacterManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class CharacterLanguages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CharacterLanguages",
                columns: table => new
                {
                    CharactersId = table.Column<int>(type: "int", nullable: false),
                    LanguagesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterLanguages", x => new { x.CharactersId, x.LanguagesId });
                    table.ForeignKey(
                        name: "FK_CharacterLanguages_Characters_CharactersId",
                        column: x => x.CharactersId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CharacterLanguages_Languages_LanguagesId",
                        column: x => x.LanguagesId,
                        principalTable: "Languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CharacterLanguages_LanguagesId",
                table: "CharacterLanguages",
                column: "LanguagesId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CharacterLanguages");
        }
    }
}
