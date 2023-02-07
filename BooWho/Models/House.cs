namespace BooWho.Models
{
    public class House
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public string Address { get; set; }
        public string ImageUrl { get; set; }
        public string Notes { get; set; }
        public UserProfile UserProfile { get; set; }
        public UserType UserType { get; set; }
        public GhostType GhostType { get; set; }

    }
}
