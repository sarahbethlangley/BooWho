using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using BooWho.Models;
using BooWho.Repositories;
using BooWho.Interfaces;

namespace BooWho.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HauntController : ControllerBase
    {
        private readonly IHauntRepository _hauntRepository;
        private readonly IHouseRepository _houseRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public HauntController(
            IHauntRepository hauntRepository,
            IHouseRepository houseRepository,
            IUserProfileRepository userProfileRepository)
        {
            _hauntRepository = hauntRepository;
            _houseRepository = houseRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_hauntRepository.GetAllHaunts());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var haunt = _hauntRepository.GetHauntsById(id);
            if (haunt != null)
            {
                NotFound();
            }
            return Ok(haunt);
        }

        [HttpPost]
        public IActionResult Post(Haunt haunt)
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile.UserType.Type != "Ghost")
            {
                return Unauthorized();
            }
            haunt.UserProfileId = currentUserProfile.Id;
            _hauntRepository.Add(haunt);
            return CreatedAtAction(nameof(Get), new { id = haunt.Id }, haunt);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Haunt haunt)
        {
            if (id != haunt.Id)
            {
                return BadRequest();
            }

            _hauntRepository.Update(haunt);
            return NoContent();
        }

        [HttpGet("myHaunts/{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userHaunts = _hauntRepository.GetAllHauntsByUser(firebaseUserId);
            if (userHaunts == null)
            {
                return NotFound();
            }
            return Ok(userHaunts);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _hauntRepository.Delete(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
