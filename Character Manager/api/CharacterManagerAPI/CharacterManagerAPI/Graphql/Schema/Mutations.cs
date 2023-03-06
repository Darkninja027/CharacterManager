using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema
{
    public class Mutations
    {
        private readonly IDbContextFactory<CMContext> _context;
        public Mutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }


    }
}
