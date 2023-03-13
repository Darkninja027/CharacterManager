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
        public IEnumerable<MagicItem> GetItems()
        {
            using (CMContext db = _context.CreateDbContext())
            {
                var Items = db.MagicItems.ToList();
                return Items;
            }
        }

        public MagicItem GetMagicItem(int id)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem magicItem = db.MagicItems.FirstOrDefault(x => x.Id == id);
                if (magicItem == null)
                {
                    throw new GraphQLException(new Error("The magic item does not exist"));
                }
                return magicItem;
            }
        }
    }
}
