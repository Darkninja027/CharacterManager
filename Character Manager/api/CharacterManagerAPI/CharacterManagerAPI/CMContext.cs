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

        
    }
}
