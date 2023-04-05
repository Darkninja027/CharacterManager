using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema.Queries
{
    [ExtendObjectType("Query")]
    public class CharacterQueries
    {
        private readonly IDbContextFactory<CMContext> _context;

        public CharacterQueries(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public IEnumerable<Character> GetAllCharacters()
        {
            using( CMContext db = _context.CreateDbContext())
            {
                return db.Characters.Include(x => x.Languages).ToList();
            }
        }
    }
}
