using Newtonsoft.Json;
using System.Runtime.Serialization;

namespace CharacterManagerAPI.Models
{
    public enum LanguagesEnum
    {
        Common = 1,
        Dwarvish = 2,
        Elvish = 3,
        Giant = 4,
        Gnomish = 5,
        Goblin = 6,
        Halfling = 7,
        Orc = 8,
        Abyssal = 9,
        Celestial = 10,
        Draconic = 11,
        DeepSpeech = 12,
        Infernal = 13,
        Primordial = 14,
        Sylvan = 15,
        Undercommon = 16,
        Abanasinia = 17,
        Aquan = 18,
        Auran = 19,
        Ergot = 20,
        Hadozee = 21,
        Ignan = 22,
        Istarian = 23,
        Kenderspeak = 24,
        Kharolian = 25,
        Khur = 26,
        Kothian = 27,
        Kraul = 28,
        Leonin = 29,
        Loxodon = 30,
        Marquesian = 31,
        Merfolk = 32,
        Minotaur = 33,
        Naush = 34,
        Nerakese = 35,
        Nordmaarian = 36,
        Quori = 37,
        Reidran = 38,
        Solamnic = 39,
        Sphinx = 40,
        Terran = 41,
        ThriKreen = 42,
        Vedalken = 43,
        Zemnian = 44,



    }
    public class Languages
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Character>? Characters { get; set; } = new List<Character>();

    }
}
