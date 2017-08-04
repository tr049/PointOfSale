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
using System.Reflection;
using System.Xml;

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
            var embededHibernateCFG = this.GetType().Assembly.GetManifestResourceStream("NHibernateCore.hibernate.cfg.xml");
            configuration.Configure(XmlReader.Create(embededHibernateCFG));
            var productConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\ProductDTO.hbm.xml");
            var orderConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\OrderDTO.hbm.xml");
            var orderDetailConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\OrderDetailDTO.hbm.xml");
            var customerConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\CustomerDTO.hbm.xml");
            var categoryConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\CategoryDTO.hbm.xml");
            var userConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\UserDTO.hbm.xml");
            var stockInConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\StockInDTO.hbm.xml");
            var stockOutConfigurationFile = HttpContext.Current.Server.MapPath(@"~\bin\MappingFiles\StockOutDTO.hbm.xml");

            configuration.AddFile(productConfigurationFile);
            configuration.AddFile(orderConfigurationFile);
            configuration.AddFile(orderDetailConfigurationFile);
            configuration.AddFile(customerConfigurationFile);
            configuration.AddFile(categoryConfigurationFile);
            configuration.AddFile(userConfigurationFile);
            configuration.AddFile(stockInConfigurationFile);
            configuration.AddFile(stockOutConfigurationFile);

            factory = configuration.BuildSessionFactory();

            session = factory.OpenSession();
        }

        public ISession GetSession()
        {
            return session;
        }
        

    }
}
