using System;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Call2Collegs.Model;



namespace Call2Collegs.Services {
    
    public class DataAccessPostgreSqlProvider : IDataAccessProvider, IDisposable
    {
        private readonly NpgDbContext _context;
        private readonly ILogger _logger;

        public DataAccessPostgreSqlProvider(NpgDbContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger("DataAccessPostgreSqlProvider");
        }
        
        public void Dispose(){
            _context.Dispose();
            GC.SuppressFinalize(this);
        }
        
        void Validate(User user){
            if (user == null)
                throw new NullReferenceException("user == null");
        }

        public void Add(User user)
        {
            Validate(user);
            
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Update(User user)
        {
            Validate(user);
            
            _context.Users.Update(user);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var entity = _context.Users.First(t => t.Id == id);
            _context.Users.Remove(entity);
            _context.SaveChanges();
        }

        public User GetById(long id)
        {
            return _context.Users.First(t => t.Id == id);
        }

        public List<User> Get()
        {
            // Using the shadow property EF.Property<DateTime>(dataEventRecord)
            return _context.Users.OrderByDescending(u => EF.Property<DateTime>(u, "UpdatedTimestamp")).ToList();
        }

    }
    
    public interface IDataAccessProvider
    {
        void Add(User user);

        void Update(User user);

        void Delete(long id);

        User GetById(long id);

        List<User> Get();
        
    }
}