using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

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
                if (character == null)
                {
                    throw new GraphQLException(new Error("AddCharacter: No character was given"));
                }

                Character newCharacter = new Character
                {
                    Name = character.Name,
                    //Race = character.Race,
                    Languages = character.Languages,
                    Level = character.Level,
                };

                db.Characters.Add(newCharacter);
                db.SaveChanges();
                return newCharacter;
            }

            
        }
        
    }
}
