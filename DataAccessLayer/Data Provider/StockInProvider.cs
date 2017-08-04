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
    public class StockInProvider: IStockIn
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public StockInProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddStockIn(StockInDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return 1;
            }
        }

        public int DeleteStockIn(StockInDTO dto)
        {
            using (session.BeginTransaction())
            {
                StockInDTO old = session.Get<StockInDTO>(dto.StockInId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<StockInDTO> GetAllStockIns()
        {
            using (session.BeginTransaction())
            {
                List<StockInDTO> StockInDTOs = (List<StockInDTO>)session.CreateCriteria<StockInDTO>().List<StockInDTO>();
                return StockInDTOs;
            }
        }

        public StockInDTO GetStockInById(int id)
        {
            StockInDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<StockInDTO>(id);
            }

            return obj;
        }

        public int UpdateStockIn(StockInDTO dto)
        {
            using (session.BeginTransaction())
            {
                StockInDTO old = session.Get<StockInDTO>(dto.StockInId);
                old.Date = dto.Date;
                old.Description = dto.Description;
                old.Quantity = dto.Quantity;
                old.Product = dto.Product;
                session.Update(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
