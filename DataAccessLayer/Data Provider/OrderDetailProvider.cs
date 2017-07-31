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
    class OrderDetailProvider : IOrderDetail
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
                return 1;
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
                List<OrderDetailDTO> OrderDetailDTOs = (List<OrderDetailDTO>)session.CreateCriteria<OrderDetailDTO>().List<OrderDetailDTO>();
                return OrderDetailDTOs;
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
                OrderDetailDTO old = session.Get<OrderDetailDTO>(dto.OrderDetailId);
                old = dto;
                session.SaveOrUpdate(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
