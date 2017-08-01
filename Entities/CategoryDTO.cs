using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CategoryDTO
    {
        public virtual int CategoryId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }

        public virtual IList<ProductDTO> Products { get; set; }
        public override bool Equals(object obj)
        {
            if(obj.ToString() == "")
            {
                return false;
            }
            return ((CategoryDTO)obj).CategoryId == CategoryId;
        }
        public override int GetHashCode()
        {
            return CategoryId.GetHashCode();
        }

        
    }
}
