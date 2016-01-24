using System;
using System.Linq;
using Microsoft.Data.Entity;

using Call2Collegs.Model;
using Call2Collegs.Services;

namespace Call2Collegs.Services{
    
    public class NpgDbContext: DbContext {
        public DbSet<User> Users {get;set;}
        
        private readonly IConfigService _configService;
        public NpgDbContext(IConfigService configService){
            this._configService = configService;
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasKey(m => m.Id);

            // shadow properties
            builder.Entity<User>().Property<DateTime>("UpdatedTimestamp");

            base.OnModelCreating(builder);
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = this._configService
                .GetValue("connectionStrings:" + this._configService.GetValue("connectionName"));
                //Console.WriteLine("connect: " + connectionString);
            optionsBuilder.UseNpgsql(connectionString);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();

            updateUpdatedProperty<User>();

            return base.SaveChanges();
        }

        private void updateUpdatedProperty<T>() where T : class
        {
            var modifiedSourceInfo =
                ChangeTracker.Entries<T>()
                    .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);

            foreach (var entry in modifiedSourceInfo)
            {
                entry.Property("UpdatedTimestamp").CurrentValue = DateTime.UtcNow;
            }
        }
    }
}