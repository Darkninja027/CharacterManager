using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CharacterManagerAPI.Models
{ 
    public enum SizeEnum
    {
        Tiny,
        Small,
        Medium,
        Large,
        Huge,
        Gargantuan,
    }

    public enum CreatureTypeEnum
    {
        Aberration,
        Beast,
        Celestial,
        Construct,
        Dragon,
        Elemental,
        Fey,
        Fiend,
        Giant,
        Humanoid,
        Monstrosity,
        Ooze,
        Plant,
        Undead,


    }
    public class Race
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Speed { get; set; }
        public CreatureTypeEnum Type { get; set; }
        public SizeEnum Size { get; set; } = SizeEnum.Medium;
        public int Strength { get; set; } = 0;
        public int Dexterity { get; set; } = 0;
        public int Constitution { get; set; } = 0;
        public int Intelligence { get; set; } = 0;
        public int Wisdom { get; set; } = 0;
        public int Charisma { get; set; } = 0;
        public LanguagesEnum DefaultLanguage { get; set; } = LanguagesEnum.Common;
        public int KnownLanguages { get; set; } = 1;
        public int KnownFeats { get; set; } = 0;
        public ICollection<RaceTraits>? RaceTraits { get; set; }
        [ForeignKey("DragonAncestryId")]
        public DragonAncestry? DragonAncestry { get; set; } = null;
        [ForeignKey("DragonAncestry")]
        public int? DragonAncestryId { get; set; }


    }
}
