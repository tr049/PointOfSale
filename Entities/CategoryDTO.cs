using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CategoryDTO: ICloneable
    {
        public virtual int CategoryId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }

        public virtual IList<ProductDTO> Products { get; set; }
        public override bool Equals(object obj)
        {
            return ((CategoryDTO)obj).Name == Name;
        }
        public override int GetHashCode()
        {
            return Name.GetHashCode();
        }

        public object Clone()
        {
            var item = new CategoryDTO
            {
                Name = Name,
                Type = Type
            };
            return item;
        }
    }
}
