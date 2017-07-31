using DataAccessLayer.IProviders;
using Entities;
using NHibernate;
using NHibernateCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Data_Provider
{
    class CategoryProvider : ICategory
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public CategoryProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddCategory(CategoryDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return 1;
            }
        }

        public int DeleteCategory(CategoryDTO dto)
        {
            using (session.BeginTransaction())
            {
                CategoryDTO old = session.Get<CategoryDTO>(dto.CategoryId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<CategoryDTO> GetAllCategorys()
        {
            using (session.BeginTransaction())
            {
                List<CategoryDTO> CategoryDTOs = (List<CategoryDTO>)session.CreateCriteria<CategoryDTO>().List<CategoryDTO>();
                return CategoryDTOs;
            }
        }

        public CategoryDTO GetCategoryById(int id)
        {
            CategoryDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<CategoryDTO>(id);
            }

            return obj;
        }

        public int UpdateCategory(CategoryDTO dto)
        {
            using (session.BeginTransaction())
            {
                CategoryDTO old = session.Get<CategoryDTO>(dto.CategoryId);
                old = dto;
                session.SaveOrUpdate(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
