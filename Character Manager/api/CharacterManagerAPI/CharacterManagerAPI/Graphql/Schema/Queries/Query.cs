using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema.Queries
{

    public class Query
    {
        private protected IDbContextFactory<CMContext> _context;
        public Query(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }
        
    }
}
