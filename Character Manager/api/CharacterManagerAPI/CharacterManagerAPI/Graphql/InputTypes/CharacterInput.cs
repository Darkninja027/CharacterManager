using CharacterManagerAPI.Models;

namespace CharacterManagerAPI.Graphql.InputTypes
{
    public enum AlignmentEnum
    {
        ChaoticGood,
        NeutralGood,
        LawfulGood,
        ChaoticNeutral,
        TrueNeutral,
        LawfulNeutral,
        ChaoticEvil,
        NeutralEvil,
        LawfulEvil,
    }
    public class PlayerCharacterInput
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        //public Race Race { get; set; }
        public ICollection<PCLanguages> Languages { get; set; }

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

    public class PCLanguages
    {
        public int Id { get; set; }
    }


}
