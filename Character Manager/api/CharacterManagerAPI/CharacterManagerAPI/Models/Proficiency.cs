namespace CharacterManagerAPI.Models
{
    public enum ProficiencyTypeEnum
    {
        Tool = 1,
        Weapon = 2,
        Armor = 3,
        Skill = 4,
    }
    public class Proficiency
    {
        public int Id { get; set; }
        public Character Character { get; set; }
        public string Name { get; set; }
        public ProficiencyTypeEnum Type { get; set; }
        public int? Modifier { get; set; }
        public bool? Expertise { get; set; }
    }
}
