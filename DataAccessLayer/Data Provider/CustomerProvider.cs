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
    class CustomerProvider : ICustomer
    {
        private NHibernateHelper nHibernate;
        private ISession session;
        public CustomerProvider()
        {
            nHibernate = new NHibernateHelper();
            session = nHibernate.GetSession();
        }
        public int AddCustomer(CustomerDTO dto)
        {
            using (session.BeginTransaction())
            {
                session.Save(dto);
                session.Transaction.Commit();
                return 1;
            }
        }

        public int DeleteCustomer(CustomerDTO dto)
        {
            using (session.BeginTransaction())
            {
                CustomerDTO old = session.Get<CustomerDTO>(dto.CustomerCNIC);
                session.Delete(old);
                session.Transaction.Commit();
                return 1;
            }
        }

        public IList<CustomerDTO> GetAllCustomers()
        {
            using (session.BeginTransaction())
            {
                List<CustomerDTO> CustomerDTOs = (List<CustomerDTO>)session.CreateCriteria<CustomerDTO>().List<CustomerDTO>();
                return CustomerDTOs;
            }
        }

        public CustomerDTO GetCustomerById(int id)
        {
            CustomerDTO obj = null;
            using (session.BeginTransaction())
            {
                obj = session.Get<CustomerDTO>(id);
            }

            return obj;
        }

        public int UpdateCustomer(CustomerDTO dto)
        {
            using (session.BeginTransaction())
            {
                CustomerDTO old = session.Get<CustomerDTO>(dto.CustomerCNIC);
                old = dto;
                session.SaveOrUpdate(old);
                session.Transaction.Commit();
                return 1;
            }
        }
    }
}