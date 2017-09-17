using LabOnline.Business.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace LabOnline.Business.Data
{
    // https://docs.efproject.net/en/latest/platforms/aspnetcore/new-db.html
    // https://docs.efproject.net/en/latest/modeling/indexes.html
    public class LabDbContext: DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserAudit> UserOperations { get; set; }

        public LabDbContext(DbContextOptions<LabDbContext> options)
            : base(options)
        {
            Console.WriteLine(options);
        }        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            new UserMap(modelBuilder.Entity<User>());
            new UserAuditMap(modelBuilder.Entity<UserAudit>());
        }
    }
}
