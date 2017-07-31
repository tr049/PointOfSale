using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    public interface ICustomer
    {
        CustomerDTO GetCustomerById(int id);
        IList<CustomerDTO> GetAllCustomers();
        int AddCustomer(CustomerDTO dto);
        int DeleteCustomer(CustomerDTO dto);
        int UpdateCustomer(CustomerDTO dto);

    }
}
