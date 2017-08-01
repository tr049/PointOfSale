using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductDTO
    {
        public virtual int ProductId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual double Price { get; set; }
        public virtual int Quantity { get; set; }
        public virtual CategoryDTO Category { get; set; }
        public virtual IList<OrderDetailDTO> OrderDetails { get; set; }
        
        public override bool Equals(object obj)
        {
            return ((ProductDTO)obj).ProductId == ProductId;
        }
        public override int GetHashCode()
        {
            return ProductId.GetHashCode();
        }
    }
}
