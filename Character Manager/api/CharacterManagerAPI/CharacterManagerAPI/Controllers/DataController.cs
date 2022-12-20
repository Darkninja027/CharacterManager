using CharacterManagerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace CharacterManagerAPI.Controllers
{
    [ApiController]
    [Route("api/SeedData")]
    [Produces("application/json")]
    public class DataController: ControllerBase
    {
        private CMContext _context;

        public DataController(CMContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<List<Race>>> SeedRaces()
        {

            //if (_context.Races.Any())
            //{
            //    return BadRequest();
            //}
            return Ok();
        }
    }
}
