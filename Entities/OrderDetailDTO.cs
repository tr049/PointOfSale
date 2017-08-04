using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class OrderDetailDTO
    {
        public virtual int OrderDetailId { get; set; }
        public virtual double Price { get; set; }
        public virtual int Quantity { get; set; }
        public virtual OrderDTO Order { get; set; }
        public virtual IList<StockOutDTO> StockOuts { get; set; }
        public virtual ProductDTO Product { get; set; }
        public override bool Equals(object obj)
        {
            try
            {
                return ((OrderDetailDTO)obj).OrderDetailId == OrderDetailId;
            }
            catch (Exception)
            {

                return false;
            }
            
        }
        public override int GetHashCode()
        {
            return OrderDetailId.GetHashCode();
        }
    }
}
