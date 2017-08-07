using DataAccessLayer.IProviders;
using Entities;
using NHibernate;
using NHibernate.Transform;
using NHibernateCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Data_Provider
{
    public class OrderDetailProvider : IOrderDetail
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public OrderDetailProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddOrderDetail(OrderDetailDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return dto.OrderDetailId;
            }
        }

        public int DeleteOrderDetail(OrderDetailDTO dto)
        {
            using (session.BeginTransaction())
            {
                OrderDetailDTO old = session.Get<OrderDetailDTO>(dto.OrderDetailId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<OrderDetailDTO> GetAllOrderDetails()
        {
            using (session.BeginTransaction())
            {
                List<OrderDetailDTO> OrderDTOs = (List<OrderDetailDTO>)session.CreateCriteria<OrderDetailDTO>().List<OrderDetailDTO>();
                return OrderDTOs;
            }
        }

        public OrderDetailDTO GetOrderDetailById(int id)
        {
            OrderDetailDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<OrderDetailDTO>(id);
            }

            return obj;
        }

        public int UpdateOrderDetail(OrderDetailDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.SaveOrUpdate(dto);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
