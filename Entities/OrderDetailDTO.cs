using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class OrderDetailDTO: ICloneable
    {
        public virtual int OrderDetailId { get; set; }
        public virtual int ProductId { get; set; }
        public virtual int OrderId { get; set; }
        public virtual double Price { get; set; }
        public virtual int Quantity { get; set; }
        public virtual OrderDTO Order { get; set; }
        public object Clone()
        {
            var item = new OrderDetailDTO
            {
                OrderId = OrderId,
                ProductId = ProductId,
                Quantity = Quantity,
                Price = Price
            };
            return item;
        }
        public virtual IList<ProductDTO> Products { get; set; }
        public override bool Equals(object obj)
        {
            return ((OrderDetailDTO)obj).OrderDetailId == OrderDetailId;
        }
        public override int GetHashCode()
        {
            return OrderDetailId.GetHashCode();
        }
    }
}
