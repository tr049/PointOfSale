using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ProductDTO: ICloneable
    {
        public virtual int ProductId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual double Price { get; set; }
        public virtual int Quantity { get; set; }
        public virtual int CategoryId { get; set; }
        public virtual CategoryDTO Category { get; set; }
        public object Clone()
        {
            var item = new ProductDTO
            {
                Name = Name,
                Description = Description,
                Price = Price,
                Quantity = Quantity,
                CategoryId = CategoryId
            };
            return item;
        }
        public override bool Equals(object obj)
        {
            return ((ProductDTO)obj).Name == Name;
        }
        public override int GetHashCode()
        {
            return Name.GetHashCode();
        }
    }
}
