using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CustomerDTO: ICloneable
    {
        public virtual int CustomerCNIC { get; set; }
        public virtual string CustomerName { get; set; }
        public virtual int CustomerPhoneNumber { get; set; }
        public virtual IList<OrderDTO> Orders { get; set; }

        public object Clone()
        {
            var item = new CustomerDTO
            {
                CustomerCNIC = CustomerCNIC,
                CustomerName = CustomerName,
                CustomerPhoneNumber = CustomerPhoneNumber
            };
            return item;
        }

        public override bool Equals(object obj)
        {
            return ((CustomerDTO)obj).CustomerCNIC == CustomerCNIC;
        }
        public override int GetHashCode()
        {
            return CustomerCNIC.GetHashCode();
        }
    }
}
