using CharacterManagerAPI.Models;

namespace CharacterManagerAPI.Seeds
{
    public class Races
    {
        public static void SeedDragonborns(CMContext context)
        {
                
        }

        public static void SeedElves(CMContext context)
        {

        }
        public static void SeedDwarves(CMContext context)
        {

        }
        public static void SeedGnomes(CMContext context)
        {

        }
        public static void SeedHalfElves(CMContext context)
        {

        }
        public static void SeedHalflings(CMContext context)
        {

        }
        public static void SeedHalfOrcs(CMContext context)
        {

        }
        public static void SeedHumans(CMContext context)
        { 
            context.Races.Add(new Race()
            {
                Name = "Human",
                Speed = 30,
                Size = SizeEnum.Medium,
                Strength = 1,
                Dexterity = 1,
                Constitution = 1,
                Intelligence = 1,
                Wisdom = 1,
                Charisma = 1,
                DefaultLanguage = LanguagesEnum.Common,
                KnownLanguages = 2,
                KnownFeats = 0,

            });
            context.SaveChanges();
        }
        public static void SeedTieflings(CMContext context)
        {

        }

    }
}
