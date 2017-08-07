using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Entities
{
    public class ProductStockDTO
    {
        public virtual int ProductId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual double Price { get; set; }
        public virtual double Quantity { get; set; }
        public virtual int CategoryId { get; set; }
        public override bool Equals(object obj)
        {
            try
            {
                ProductStockDTO temp = (ProductStockDTO)obj;
                return ((ProductStockDTO)obj).ProductId == ProductId;
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