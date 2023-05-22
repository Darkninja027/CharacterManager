namespace CharacterManagerAPI.Models
{
    public class CharacterNotes
    {
        public int Id { get; set; }
        public Character Character { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        //public int DisplayIndex { get; set; } todo
    }
}
