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

        public virtual int CustomerId { get; set; }
        public virtual CustomerDTO Customers { get; set; }
        public virtual IList<OrderDetailDTO> OrderDetails { get; set; }
        public object Clone()
        {
            var item = new OrderDTO
            {
                CustomerId = CustomerId,
                Discount = Discount,
                Date = Date
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
