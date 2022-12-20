using Microsoft.VisualBasic;

namespace CharacterManagerAPI.Models
{ 
    public class Race
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Speed { get; set; }
        public int Strength { get; set; } = 0;
        public int Dexterity { get; set; } = 0;
        public int Constitution { get; set; } = 0;
        public int Intelligence { get; set; } = 0;
        public int Wisdom { get; set; } = 0;
        public int Charisma { get; set; } = 0;
        public LanguagesEnum DefaultLanguage { get; set; } = LanguagesEnum.Common;
        public int KnownLanguages { get; set; } = 1;
        public int KnownFeats { get; set; } = 0;

    }
}
