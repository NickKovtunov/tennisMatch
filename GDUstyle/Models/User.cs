namespace GDUstyle.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Post { get; set; }
        public string? Branch { get; set; }
        public Boolean Deleted { get; set; }
    }
}
