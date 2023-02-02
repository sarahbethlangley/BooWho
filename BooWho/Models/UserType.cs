using System.ComponentModel.DataAnnotations;

namespace BooWho.Models
{
    public class UserType
    {
        [Required]
        public int Id { get; set; }

        public string Type { get; set; }
        public static int ADMIN_TYPE_ID => 1;
        public static int USER_TYPE_ID => 2;

    }
}
