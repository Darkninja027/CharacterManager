using CharacterManagerAPI.Models;
using CharacterManagerAPI.Seeds;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace CharacterManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class DataController: ControllerBase
    {
        private CMContext _context;

        public DataController(CMContext context)
        {
            _context = context;
        }

        [HttpPost("SeedRaces")]
        public async Task<ActionResult<List<Race>>> SeedRaces()
        {
            if(await _context.Races.AnyAsync() == false)
            {
                Races.SeedRaces(_context);
                
                return Ok();
            }
            return Ok();
        }

        [HttpDelete("ClearRaces")]
        public async Task<ActionResult> ClearRaces()
        {
            _context.Database.ExecuteSqlRaw("DELETE FROM DragonAncestries");
            _context.Database.ExecuteSqlRaw("DELETE FROM Races");
            _context.Database.ExecuteSqlRaw("DBCC CHECKIDENT (Races, RESEED, 0)");
            _context.Database.ExecuteSqlRaw("DBCC CHECKIDENT (DragonAncestries, RESEED, 0)");
            _context.SaveChanges();
            return Ok();
        }
    }
}
