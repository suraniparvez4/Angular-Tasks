using EmpAPIs.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace EmpAPIs.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base()
        {
        }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Emp> Cities { get; set; }
    }
}
