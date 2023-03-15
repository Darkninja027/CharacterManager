using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema.Queries
{
    [ExtendObjectType("Query")]
    public class LanguageQueries
    {
        private readonly IDbContextFactory<CMContext> _context;

        public LanguageQueries(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public IEnumerable<Languages> GetAllLanguages()
        {
            using(CMContext db = _context.CreateDbContext())
            {
                return db.Languages.ToList();
            }
        }
    }
}
