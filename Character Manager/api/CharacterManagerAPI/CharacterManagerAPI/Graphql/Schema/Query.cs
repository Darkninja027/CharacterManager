using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Schema
{
    
    public class Query
    {
        private protected IDbContextFactory<CMContext> _context;
        public Query(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }
        public IEnumerable<Item> GetItems()
        {
            using (CMContext db = _context.CreateDbContext())
            {
                var Items = db.Items.ToList();
                return Items;
            }
        }
    }
}
