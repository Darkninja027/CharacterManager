using CharacterManagerAPI.Graphql.InputTypes;
using System.ComponentModel.DataAnnotations.Schema;

namespace CharacterManagerAPI.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Level { get; set; }
        public int MaxHealth { get; set; }
        public int Health { get; set; }
        public int ArmorClass { get; set; }
        public int? TemporaryHealth { get; set; }
        public int Strength { get; set; }
        public int StrengthModifier { get; set; }
        public int Dexterity { get; set; }
        public int DexterityModifier { get; set; }
        public int Constitution { get; set; }
        public int ConstitutionModifier { get; set; }
        public int Intelligence { get; set; }
        public int IntelligenceModifier { get; set; }
        public int Wisdom { get; set; }
        public int WisdomModifier { get; set; }
        public int Charisma { get; set; }
        public int CharismaModifier { get; set; }
        public ICollection<Proficiency> Proficiencies { get; set; }
        public Race? Race { get; set; }
        public ICollection<Languages> Languages { get; set; }
        public bool Milestone { get; set; }
        public int? Experience { get; set; }
        public string? Gender { get; set; }
        public string? PersonalityTraits { get; set; }
        public string? Bonds { get; set; }
        public string? Flaws { get; set; }
        public string? Ideals { get; set; }
        public SizeEnum Size { get; set; } = SizeEnum.Medium;
        public int? Age { get; set; }
        public string? Height { get; set; }
        public int? Weight { get; set; }
        public AlignmentEnum? Alignment { get; set; }
        public string? Skin { get; set; }
        public string? Eyes { get; set; }
        public string? Hair { get; set; }

    }
}
