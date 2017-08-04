using DataAccessLayer.IProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using NHibernateCore;
using NHibernate;
using NHibernate.Transform;

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

        public IList<ProductStockDTO> AvailableProductInStock()
        {
            IQuery query = session.CreateSQLQuery(@"select p.productId as ProductId, result.quantity as Quantity, p.name as Name, p.description as Description, p.price as Price
from(select  s.productId , (s.quantity - p.quantity) as quantity
from (select s.productId, sum(s.quantity) as quantity from dbo.stockIn as s group by s.productId) as s, (select p.productId, sum(p.quantity) as quantity from dbo.stockOut as p group by p.productId) as p
where s.productId = p.productId ) as result, dbo.Product as p
where result.quantity > 0 and result.productId = p.productId").SetResultTransformer(Transformers.AliasToBean<ProductStockDTO>());

            return query.List<ProductStockDTO>();
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
                old.Name = dto.Name;
                old.Price = dto.Price;
                old.Description = dto.Description;
                old.Category = dto.Category;
                old.StockIns = dto.StockIns;
                old.StockOuts = dto.StockOuts;
                session.Update(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
