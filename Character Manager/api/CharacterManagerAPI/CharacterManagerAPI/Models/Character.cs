using System.ComponentModel.DataAnnotations.Schema;

namespace CharacterManagerAPI.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Level { get; set; }
        public Race? Race { get; set; }

        public ICollection<Languages> Languages { get; set; }

    }
}
