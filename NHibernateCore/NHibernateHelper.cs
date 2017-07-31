using NHibernate;
using NHibernate.Cfg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Threading.Tasks;
using Entities;
using System.IO;

namespace NHibernateCore
{
    public class NHibernateHelper
    {
        private ISessionFactory factory;
        private Configuration configuration;
        private ISession session;

        public NHibernateHelper()
        {
            configuration = new Configuration();
            var configurationPath = HttpContext.Current.Server.MapPath(@"~\bin\debug\hibernate.cfg.xml");
            configuration.Configure(configurationPath);

            var productConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\debug\MappingFiles\ProductDTO.hbm.xml");
            var orderConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\debug\MappingFiles\OrderDTO.hbm.xml");
            var orderDetailConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\debug\MappingFiles\OrderDetailDTO.hbm.xml");
            var customerConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\debug\MappingFiles\CustomerDTO.hbm.xml");
            var categoryConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\debug\MappingFiles\CategoryDTO.hbm.xml");

            configuration.AddFile(productConfigurationFile);
            configuration.AddFile(orderConfigurationFile);
            configuration.AddFile(orderDetailConfigurationFile);
            configuration.AddFile(customerConfigurationFile);
            configuration.AddFile(categoryConfigurationFile);
            factory = configuration.BuildSessionFactory();

            session = factory.OpenSession();
        }

        public ISession GetSession()
        {
            return session;
        }

        public IList<ProductDTO> GetAllProducts()
        {
            using (session.BeginTransaction())
            {
                List<ProductDTO> ProductDTOs = (List<ProductDTO>)session.CreateCriteria<ProductDTO>().List<ProductDTO>();
                return ProductDTOs;
            }
        }
        public void AddProductDTO(ProductDTO obj)
        {
            using (session.BeginTransaction())
            {
                session.Save(obj);
                session.Transaction.Commit();
            }
        }

    }
}
