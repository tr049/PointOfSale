using DataAccessLayer.IProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using NHibernateCore;
using NHibernate;

namespace DataAccessLayer.Data_Provider
{
    public class ProductProvider : IProduct
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public ProductProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddProduct(ProductDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return 1;
            }
        }
        
        public int DeleteProduct(ProductDTO dto)
        {
            using (session.BeginTransaction())
            {
                ProductDTO old = session.Get<ProductDTO>(dto.ProductId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<ProductDTO> GetAllProducts()
        {
            using (session.BeginTransaction())
            {
                List<ProductDTO> ProductDTOs = (List<ProductDTO>)session.CreateCriteria<ProductDTO>().List<ProductDTO>();
                return ProductDTOs;
            }
        }

        public ProductDTO GetProductById(int id)
        {
            ProductDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<ProductDTO>(id);
            }

            return obj;
        }

        public int UpdateProduct(ProductDTO dto)
        {
            using (session.BeginTransaction())
            {
                ProductDTO old = session.Get<ProductDTO>(dto.ProductId);
                old = dto;
                session.SaveOrUpdate(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
