using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    public interface IOrderDetail
    {
        OrderDetailDTO GetOrderDetailById(int id);
        IList<OrderDetailDTO> GetAllOrderDetails();
        int AddOrderDetail(OrderDetailDTO dto);
        int DeleteOrderDetail(OrderDetailDTO dto);
        int UpdateOrderDetail(OrderDetailDTO dto);

    }
}
