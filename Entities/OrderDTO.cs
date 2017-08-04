using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class OrderDTO
    {
        public virtual int OrderId { get; set; }
        public virtual double Discount { get; set; }
        public virtual DateTime Date { get; set; }
        
        public virtual CustomerDTO Customer { get; set; }
        public virtual IList<OrderDetailDTO> OrderDetails { get; set; }
        
        public override bool Equals(object obj)
        {
            try
            {
                return ((OrderDTO)obj).OrderId == OrderId;
            }
            catch (Exception)
            {

                return false;
            }
            
        }
        public override int GetHashCode()
        {
            return OrderId.GetHashCode();
        }
    }
}
