namespace CharacterManagerAPI.Models
{
    public enum DragonEnum
    {
        Amethyst,
        Black,
        Blue,
        Brass,
        Bronze,
        Copper,
        Emerald,
        Gold,
        Crystal,
        Green,
        Red,
        Sapphire,
        Silver,
        Topaz,
        White,

    }

    public class DragonAncestry
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public DragonEnum Dragon { get; set; }
        public string DamageType => Dragon switch
        {
            DragonEnum.Amethyst => "Force",
            DragonEnum.Crystal => "Radiant",
            DragonEnum.Emerald => "Psychic",
            DragonEnum.Sapphire => "Thunder",
            DragonEnum.Topaz => "Necrotic",
            DragonEnum.Black => "Acid",
            DragonEnum.Copper => "Acid",
            DragonEnum.Blue => "Lightning",
            DragonEnum.Bronze => "Lightning",
            DragonEnum.Red => "Fire",
            DragonEnum.Brass => "Fire",
            DragonEnum.Gold => "Fire",
            DragonEnum.Silver => "Cold",
            DragonEnum.White => "Cold",
            DragonEnum.Green => "Poison",

        };

        public string Resistance => DamageType;
        public string BreathType => Dragon switch
        {
            DragonEnum.Amethyst => "15 foot cone.",
            DragonEnum.Crystal => "15 foot cone.",
            DragonEnum.Emerald => "15 foot cone.",
            DragonEnum.Sapphire => "15 foot cone.",
            DragonEnum.Topaz => "15 foot cone.",
            DragonEnum.Copper => "15 foot cone.",
            DragonEnum.Bronze => "15 foot cone.",
            DragonEnum.Brass => "15 foot cone.",
            DragonEnum.Gold => "15 foot cone.",
            DragonEnum.Silver => "15 foot cone.",
            DragonEnum.Black => "30 foot line. 5 feet wide.",
            DragonEnum.Blue => "30 foot line. 5 feet wide.",
            DragonEnum.Red => "30 foot line. 5 feet wide.",
            DragonEnum.White => "30 foot line. 5 feet wide.",
            DragonEnum.Green => "30 foot line. 5 feet wide.",
        };


        public string BreathSave{ get; set; } = "Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus).";
        public string Level1 { get; set; } = "1D10";
        public string Level5 { get; set; } = "2D10";
        public string Level11 { get; set; } = "3D10";
        public string Level17 { get; set; } = "4D10";



    }
    

}
