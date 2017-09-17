using LabOnline.Business.Interfaces;
using LabOnline.Business.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LabOnline.Business.Data
{
    /// <summary>
    /// https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/crud
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly LabDbContext context;
        private DbSet<TEntity> dataModel;

        public Repository(LabDbContext context)
        {
            this.context = context;
            dataModel = context.Set<TEntity>();            
        }
        public LabDbContext Db
        {
            get { return context; }
        }
        public IEnumerable<TEntity> GetAll()
        {
            return dataModel.AsNoTracking().AsEnumerable();
        }
        public TEntity Get(Guid id)
        {
            return dataModel.SingleOrDefault(s => s.Id == id);
        }
        public IEnumerable<TEntity> Find(Func<TEntity, bool> predicate, bool useNoTracking = false)
        {
            if (useNoTracking)
            {
                return dataModel.AsNoTracking().Where(predicate);
            }

            var query = dataModel.Where(predicate).ToAsyncEnumerable();
            return query.ToEnumerable();
        }
        public void Add(TEntity entity)
        {
            Validate(entity);
            dataModel.Add(entity);
            context.SaveChanges();
        }
        public void Update(TEntity entity)
        {
            Validate(entity);
            var rowsAffected = 0;

            try
            {
                context.Update(entity);
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine(ex);

                context.Entry(entity).State = EntityState.Modified;
                context.Attach(entity);
                context.Update(entity);
            }

            try
            {
                rowsAffected = context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            Console.WriteLine(rowsAffected);
        }
        public void Delete(TEntity entity)
        {
            Validate(entity);
            dataModel.Remove(entity);
            context.SaveChanges();
        }
        private void Validate(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
        }
    }
}
