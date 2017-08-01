using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class OrderDTO: ICloneable
    {
        public virtual int OrderId { get; set; }
        public virtual double Discount { get; set; }
        public virtual DateTime Date { get; set; }
        
        public virtual CustomerDTO Customer { get; set; }
        public virtual IList<OrderDetailDTO> OrderDetails { get; set; }
        public virtual object Clone()
        {
            var item = new OrderDTO
            {
                Customer = Customer,
                Discount = Discount,
                Date = Date,
                OrderDetails = OrderDetails
            };
            return item;
        }
        public override bool Equals(object obj)
        {
            return ((OrderDTO)obj).OrderId == OrderId;
        }
        public override int GetHashCode()
        {
            return OrderId.GetHashCode();
        }
    }
}
