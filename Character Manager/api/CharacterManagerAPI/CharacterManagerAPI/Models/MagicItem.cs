namespace CharacterManagerAPI.Models
{
    public enum MagicItemRarity
    {
        Common,
        Uncommon,
        Rare,
        VeryRare,
        Legendary
    }

    public enum MagicItemCategory
    {
        Armor,
        Potion,
        Ring,
        Rod,
        Scroll,
        Staff,
        Wand,
        Weapon,
        WonderousItem

    }
    public class MagicItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public MagicItemRarity Rarity { get; set; }
        public MagicItemCategory Category { get; set; }
        public string Property1 { get; set; }
        public string Property2 { get; set; }
        public string Property3 { get; set; }
    }
}
