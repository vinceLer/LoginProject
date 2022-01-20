using LoginProjectAPI.Interfaces;
using LoginProjectAPI.Models;
using LoginProjectAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace LoginProjectAPI.Repositories
{
    public class UserRepository : BaseRepository, IRepository<User>
    {
        public UserRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public User FinById(int id)
        {
            return _dataContext.Users.Find(id);
        }

        public IEnumerable<User> GetAll()
        {
            return _dataContext.Users.ToList();
        }

        public bool Save(User element)
        {
            _dataContext.Users.Add(element);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<User> Search(Expression<Func<User, bool>> predicate)
        {
            return _dataContext.Users.ToList();
        }

        public User SearchOne(Expression<Func<User, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(User element)
        {
            _dataContext.Users.Update(element);
            return _dataContext.SaveChanges() > 0;
        }
    }
}
