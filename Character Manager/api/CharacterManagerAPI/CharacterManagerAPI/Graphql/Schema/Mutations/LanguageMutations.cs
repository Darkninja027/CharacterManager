using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema.Mutations
{
    [ExtendObjectType("Mutations")]
    public class LanguageMutations
    {
        private readonly IDbContextFactory<CMContext> _context;

        public LanguageMutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public Languages AddLanguage(LanguageInput language)
        {
            using(CMContext db = _context.CreateDbContext())
            {
                var exists = db.Languages.FirstOrDefault(l => l.Name == language.Name);
                if(exists != null)
                {
                    throw new GraphQLException(new Error($"A language with the name {language.Name} already exists"));
                }

                Languages newLanguage = new Languages
                {
                    Name = language.Name
                };

                db.Add(newLanguage);
                db.SaveChanges();
                return newLanguage;
            }
        }
    }
}
