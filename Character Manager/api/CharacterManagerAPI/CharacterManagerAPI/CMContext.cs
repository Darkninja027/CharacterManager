using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI
{
    public class CMContext: DbContext
    {
        public CMContext(DbContextOptions<CMContext> options): base(options)
        {

        }

        public DbSet<Character> Characters { get; set; }
        public DbSet<Languages> Languages { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<RaceTraits> RaceTraits { get; set; }
        public DbSet<DragonAncestry> DragonAncestries { get; set; }
        public DbSet<Item> Items { get; set; }

        
    }
}
