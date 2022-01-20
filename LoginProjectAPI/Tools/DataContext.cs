using LoginProjectAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginProjectAPI.Tools
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            MySqlServerVersion v = new MySqlServerVersion(new System.Version(10, 4, 19));
            optionsBuilder.UseMySql(@"server = localhost; user id = root; database = v_projects", v);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
