
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Seeds
{
    
    public static class DatabaseSeeder
    {
        private static CMContext _con;
        public static void SeedDatabase(CMContext db)
        {
            _con = db;
            ClearSeeds();
            SeedClass();
        }

        private static void ClearSeeds()
        {

        }
        private static void SeedClass()
        {
            return;
        }


      
    }
}
