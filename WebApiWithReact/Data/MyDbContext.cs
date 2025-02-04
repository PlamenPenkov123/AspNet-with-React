using Microsoft.EntityFrameworkCore;
using WebApiWithReact.Models;

namespace WebApiWithReact.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) 
        {
            
        }

        public DbSet<Person> People { get; set; }

    }
}
