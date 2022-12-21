using CharacterManagerAPI.Models;
using System.ComponentModel;

namespace CharacterManagerAPI.Seeds
{
    public class Races
    {
        public static void SeedRaces(CMContext context)
        {
            context.DragonAncestries.AddRange(new List<DragonAncestry>()
            {
                new DragonAncestry(){ Name = "Amethyst", Dragon = DragonEnum.Amethyst},
                new DragonAncestry(){ Name = "Black", Dragon = DragonEnum.Black},
                new DragonAncestry(){ Name = "Blue", Dragon = DragonEnum.Blue},
                new DragonAncestry(){ Name = "Brass", Dragon = DragonEnum.Brass},
                new DragonAncestry(){ Name = "Bronze", Dragon = DragonEnum.Bronze},
                new DragonAncestry(){ Name = "Copper", Dragon = DragonEnum.Copper},
                new DragonAncestry(){ Name = "Crystal", Dragon = DragonEnum.Crystal},
                new DragonAncestry(){ Name = "Emerald", Dragon = DragonEnum.Emerald},
                new DragonAncestry(){ Name = "Gold", Dragon = DragonEnum.Gold},
                new DragonAncestry(){ Name = "Green", Dragon = DragonEnum.Green},
                new DragonAncestry(){ Name = "Red", Dragon = DragonEnum.Red},
                new DragonAncestry(){ Name = "Sapphire", Dragon = DragonEnum.Sapphire},
                new DragonAncestry(){ Name = "Silver", Dragon = DragonEnum.Silver},
                new DragonAncestry(){ Name = "Topaz", Dragon = DragonEnum.Topaz},
                new DragonAncestry(){ Name = "White", Dragon = DragonEnum.White},
            });
            context.Races.AddRange(new List<Race>
            {
                new Race()
                {
                    Name = "Human",
                    Speed = 30,
                    Size = SizeEnum.Medium,
                    Type = CreatureTypeEnum.Humanoid,
                    Strength = 1,
                    Dexterity = 1,
                    Constitution = 1,
                    Intelligence = 1,
                    Wisdom = 1,
                    Charisma = 1,
                    DefaultLanguage = LanguagesEnum.Common,
                    KnownLanguages = 2,
                    KnownFeats = 1,
                    RaceTraits = null,
                },
                new Race()
                {
                    Name = "Dragonborn",
                    Speed = 30,
                    Size = SizeEnum.Medium,
                    Type = CreatureTypeEnum.Humanoid,
                    Strength = 1,
                    Dexterity = 1,
                    Constitution = 1,
                    Intelligence = 1,
                    Wisdom = 1,
                    Charisma = 1,
                    DefaultLanguage = LanguagesEnum.Common,
                    KnownLanguages = 2,
                    KnownFeats = 0,
                    RaceTraits = null,
                    DragonAncestryId = 1,
                },
            });
            context.SaveChanges();
        }

    }
}
