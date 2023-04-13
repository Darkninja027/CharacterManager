using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace CharacterManagerAPI.Graphql.Schema.Mutations
{
    [ExtendObjectType("Mutations")]
    public class CharacterMutations
    {
        private IDbContextFactory<CMContext> _context;
        public CharacterMutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public Character CreateCharacter(PlayerCharacterInput character)
        {
            using (CMContext db = _context.CreateDbContext())
            {

                ICollection<Languages> lang = new List<Languages>();
                ICollection <Skill> skills = new List<Skill>();

                foreach(var skill in character.Skills)
                {
                    skills.Add(new Skill
                    {
                        Name = skill.Name,
                        Attribute = skill.Attribute,
                        Proficient = skill.Proficient,
                        Expertise = skill.Expertise,
                        Modifier = skill.Modifier,
                    });
                }

                foreach(var save in character.SavingThrows)
                {
                    skills.Add(new Skill
                    {
                        Name = save.Name,
                        Attribute = save.Attribute,
                        Proficient = save.Proficient,
                        Expertise = save.Expertise,
                        Modifier = save.Modifier,
                    });
                }

                foreach (var language in character.Languages)
                {
                    lang.Add(db.Languages.FirstOrDefault(l => l.Id == language.Id));
                }

                if (character == null)
                {
                    throw new GraphQLException(new Error("CreateCharacter: No character was given"));
                }

                Character newCharacter = new Character
                {
                    Name = character.Name,
                    Milestone = character.Milestone,
                    Level = character.Level,
                    Health = character.Health,
                    MaxHealth = character.MaxHealth,
                    ArmorClass = character.ArmorClass,
                    TemporaryHealth = character.TemporaryHealth,
                    ProficiencyBonus = character.ProficiencyBonus,
                    Strength = character.Strength,
                    StrengthModifier = character.StrengthModifier,
                    Dexterity = character.Dexterity,
                    DexterityModifier = character.DexterityModifier,
                    Constitution = character.Constitution,
                    ConstitutionModifier = character.ConstitutionModifier,
                    Intelligence = character.Intelligence,
                    IntelligenceModifier = character.IntelligenceModifier,
                    Wisdom = character.Wisdom,
                    WisdomModifier = character.WisdomModifier,
                    Charisma = character.Charisma,
                    CharismaModifier = character.CharismaModifier,
                    Experience = character.Experience,
                    Languages = lang,
                    Age = character.Age,
                    Gender = character.Gender,
                    Alignment = character.Alignment,
                    Size = character.Size,
                    PersonalityTraits = character.PersonalityTraits,
                    Ideals = character.Ideals,
                    Bonds = character.Bonds,
                    Flaws = character.Flaws,
                    Weight = character.Weight,
                    Height = character.Height,
                    Hair = character.Hair,
                    Eyes = character.Eyes,
                    Skin = character.Skin,
                    Skills = skills
                    //Race = character.Race,
                };

                db.Characters.Add(newCharacter);
                db.SaveChanges();
                return newCharacter;
            }


        }
        
    }
}
