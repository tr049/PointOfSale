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
    public class StockOutProvider:IStockOut
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public StockOutProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddStockOut(StockOutDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return dto.StockOutId;
            }
        }

        public int DeleteStockOut(StockOutDTO dto)
        {
            using (session.BeginTransaction())
            {
                StockOutDTO old = session.Get<StockOutDTO>(dto.StockOutId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<StockOutDTO> GetAllStockOuts()
        {
            using (session.BeginTransaction())
            {
                List<StockOutDTO> StockOutDTOs = (List<StockOutDTO>)session.CreateCriteria<StockOutDTO>().List<StockOutDTO>();
                return StockOutDTOs;
            }
        }

        public StockOutDTO GetStockOutById(int id)
        {
            StockOutDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<StockOutDTO>(id);
            }

            return obj;
        }

        public int UpdateStockOut(StockOutDTO dto)
        {
            using (session.BeginTransaction())
            {
                StockOutDTO old = session.Get<StockOutDTO>(dto.StockOutId);
                old.Date = dto.Date;
                old.Description = dto.Description;
                old.OrderDetail = dto.OrderDetail;
                old.Quantity = dto.Quantity;
                old.Product = dto.Product;
                session.SaveOrUpdate(old);
                session.Transaction.Commit();
                return 1;
            }
        }

    }
}
