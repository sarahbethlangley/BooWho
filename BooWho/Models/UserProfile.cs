using System.ComponentModel.DataAnnotations;

namespace BooWho.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }
        public int UserTypeId { get; set; }
        public int? GhostTypeId { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }
        public string Name { get; set; }

        public string Hobbies { get; set; }
       
        public UserType UserType { get; set; }

        public GhostType GhostType { get; set;}
    }
}
