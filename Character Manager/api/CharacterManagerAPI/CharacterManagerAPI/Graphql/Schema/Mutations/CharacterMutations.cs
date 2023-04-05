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

                //ICollection<Languages> lang = new List<Languages>();
                
                //foreach (var language in character.Languages)
                //{
                //    lang.Add(db.Languages.FirstOrDefault(l => l.Id == language.Id));
                //}

                if (character == null)
                {
                    throw new GraphQLException(new Error("CreateCharacter: No character was given"));
                }

                Character newCharacter = new Character
                {
                    Name = character.Name,
                    //Race = character.Race,
                    Level = character.Level,
                };

                db.Characters.Add(newCharacter);
                db.SaveChanges();
                newCharacter.Languages = new List<Languages>();
                foreach (var lang in character.Languages)
                {
                    var language = db.Languages.Where(x => x.Id == lang.Id).FirstOrDefault();
                    newCharacter.Languages.Add(language);
                }
                db.SaveChanges();
                return newCharacter;
            }


        }
        
    }
}
