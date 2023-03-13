using CharacterManagerAPI.Models;

namespace CharacterManagerAPI.Graphql.InputTypes
{
    public class MagicItemInput
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public MagicItemRarity Rarity { get; set; } = MagicItemRarity.Common;
        public MagicItemCategory Category { get; set; } = MagicItemCategory.WonderousItem;
        public string? Property1 { get; set; }
        public string? Property2 { get; set; }
        public string? Property3 { get; set; }
    }
}
