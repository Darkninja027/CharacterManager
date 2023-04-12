namespace CharacterManagerAPI.Models
{

    public class Skill
    {
        public int Id { get; set; }
        public Character Character { get; set; }
        public string Name { get; set; }
        public string Attribute { get; set; }
        public bool Proficient { get; set; }
        public int Modifier { get; set; }
        public bool Expertise { get; set; }
    }
}
