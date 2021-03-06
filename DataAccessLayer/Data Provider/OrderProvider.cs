﻿using DataAccessLayer.IProviders;
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
    public class OrderProvider : IOrder
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public OrderProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddOrder(OrderDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return dto.OrderId;
            }
        }

        public int DeleteOrder(OrderDTO dto)
        {
            using (session.BeginTransaction())
            {
                OrderDTO old = session.Get<OrderDTO>(dto.OrderId);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<OrderDTO> GetAllOrders()
        {
            using (session.BeginTransaction())
            {
                List<OrderDTO> OrderDTOs = (List<OrderDTO>)session.CreateCriteria<OrderDTO>().List<OrderDTO>();
                return OrderDTOs;
            }
        }

        public OrderDTO GetOrderById(int id)
        {
            OrderDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<OrderDTO>(id);
            }

            return obj;
        }

        public int UpdateOrder(OrderDTO dto)
        {
            using (session.BeginTransaction())
            {
                OrderDTO old = session.Get<OrderDTO>(dto.OrderId);
                old.Customer.CustomerId = dto.Customer.CustomerId;
                old.Discount = dto.Discount;
                old.Date = dto.Date;
                session.Update(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}
