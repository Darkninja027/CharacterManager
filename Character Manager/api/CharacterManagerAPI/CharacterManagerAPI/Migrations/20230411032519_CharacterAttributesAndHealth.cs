using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CharacterManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class CharacterAttributesAndHealth : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ArmorClass",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Charisma",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CharismaModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Constitution",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ConstitutionModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Dexterity",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DexterityModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Health",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Intelligence",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IntelligenceModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MaxHealth",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Strength",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "StrengthModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TemporaryHealth",
                table: "Characters",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Wisdom",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WisdomModifier",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ArmorClass",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Charisma",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "CharismaModifier",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Constitution",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "ConstitutionModifier",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Dexterity",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "DexterityModifier",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Health",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Intelligence",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "IntelligenceModifier",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "MaxHealth",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Strength",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "StrengthModifier",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TemporaryHealth",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Wisdom",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "WisdomModifier",
                table: "Characters");
        }
    }
}
