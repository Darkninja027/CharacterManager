namespace CharacterManagerAPI.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Level { get; set; }

        public ICollection<Languages> Languages { get; set; }

    }
}
