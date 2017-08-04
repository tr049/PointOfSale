using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    public interface IOrder
    {
        OrderDTO GetOrderById(int id);
        IList<OrderDTO> GetAllOrders();
        int AddOrder(OrderDTO dto);
        int DeleteOrder(OrderDTO dto);
        int UpdateOrder(OrderDTO dto);

    }
}
