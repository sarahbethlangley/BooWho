using System.ComponentModel.DataAnnotations;

namespace BooWho.Models
{
    public class Haunt
    {
       
            public int Id { get; set; }
            public int UserProfileId { get; set; }
            public int HouseId { get; set; }
            public int UserTypeId { get; set; }
            public int? GhostTypeId { get; set; }
            public string Notes { get; set; }
            public UserProfile UserProfile { get; set; }
            public UserType UserType { get; set; }
            public GhostType GhostType { get; set; }
            public House House { get; set; }
        
    }
}


