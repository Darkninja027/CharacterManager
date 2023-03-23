using CharacterManagerAPI.Models;

namespace CharacterManagerAPI.Graphql.InputTypes
{
    public class PlayerCharacterInput
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public int Level { get; set; }
        //public Race Race { get; set; }
        public ICollection<Languages> Languages { get; set; }
    }
}
