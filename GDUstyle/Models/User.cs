using System.ComponentModel.DataAnnotations;

namespace GDUstyle.Models
{
    public class User
    {
        public int Id { get; set; }
        [MaxLength(300)]
        public string? Name { get; set; }
        [MaxLength(500)]
        public string? Post { get; set; }
        [MaxLength(500)]
        public string? Branch { get; set; }
        public Boolean Deleted { get; set; }
    }
}
