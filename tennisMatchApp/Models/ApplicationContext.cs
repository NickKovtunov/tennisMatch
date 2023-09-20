using Microsoft.EntityFrameworkCore;

namespace tennisMatchApp.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Player> Players { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }
    }
}
