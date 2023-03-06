namespace CharacterManagerAPI.Models
{
    public class RaceTraits
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Race? Race { get; set; }
        public string Description { get; set; }

    }
}
