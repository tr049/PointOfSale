using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductDTO
    {
        public virtual int ProductId { get; set; }
        [Required]
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual double Price { get; set; }


        [Required]
        public virtual CategoryDTO Category { get; set; }
        public virtual IList<OrderDetailDTO> OrderDetails { get; set; }
        public virtual IList<StockInDTO> StockIns { get; set; }
        public virtual IList<StockOutDTO> StockOuts { get; set; }

        public override bool Equals(object obj)
        {
            try
            {
                ProductDTO temp = (ProductDTO)obj;
                return ((ProductDTO)obj).ProductId == ProductId;
            }
            catch
            {
                return false;
            }
            
        }
        public override int GetHashCode()
        {
            return ProductId.GetHashCode();
        }
    }
}
