using LabOnline.Business.Data;
using LabOnline.Business.Models;
using System;
using System.Collections.Generic;

namespace LabOnline.Business.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        IEnumerable<T> GetAll();
        T Get(Guid id);
        IEnumerable<T> Find(Func<T, bool> predicate, bool useNoTracking = false);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        LabDbContext Db { get; }
    }
}
