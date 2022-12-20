namespace CharacterManagerAPI.Models
{
    public enum LanguagesEnum
    {
        Common = 0,
        Dwarvish = 1,
        Elvish = 2,
        Giant = 3,
        Gnomish = 4,
        Goblin = 5,
        Halfling = 6,
        Orc = 7,
        Abyssal = 8,
        Celestial = 9,
        Draconic = 10,
        DeepSpeech = 11,
        Infernal = 12,
        Primordial = 13,
        Sylvan = 14,
        Undercommmon = 15,
        Abanasinia = 16,
        Aquan = 17,
        Auran = 18,
        Ergot = 19,
        Hadozee = 20,
        Ignan = 21,
        Istarian = 22,
        Kenderspeak = 23,
        Kharolian = 24,
        Khur = 25,
        Kothian = 26,
        Kraul = 27,
        Leonin = 28,
        Loxodon = 29,
        Marquesian = 30,
        Merfolk = 31,
        Minotaur = 32,
        Naush = 33,
        Nerakese = 34,
        Nordmaarian = 35,
        Quori = 36,
        Reidran = 37,
        Solamnic = 38,
        Sphinx = 39,
        Terran = 40,
        ThriKreen = 41,
        Vedalken = 42,
        Zemnian = 43,



    }
    public class Languages
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
