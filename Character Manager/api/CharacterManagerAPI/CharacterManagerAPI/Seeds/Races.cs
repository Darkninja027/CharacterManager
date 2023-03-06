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
                    //DragonAncestryId = 1,
                },
                //todo proficiencies
                new Race()
                {
                    Name="Dwarf",
                    Speed=25,
                    Size = SizeEnum.Medium,
                    Strength = 0,
                    Dexterity = 0,
                    Constitution = 2,
                    Intelligence = 0,
                    Wisdom = 0,
                    Charisma = 0,
                    DefaultLanguage= LanguagesEnum.Common,
                    KnownLanguages= 2,
                    RaceTraits = new List<RaceTraits>()
                    {
                        new RaceTraits()
                        {
                            Name = "Darkvision",
                            Description = "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                        },
                        new RaceTraits()
                        {
                            Name = "Dwarven Resilience",
                            Description = "You have advantage on saving throws against poison, and you have resistance against poison damage"
                        },
                        new RaceTraits()
                        {
                            Name = "Stonecunning",
                            Description = "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                        }
                    },
                    
                    
                }
            });
            context.SaveChanges();
        }

    }
}
