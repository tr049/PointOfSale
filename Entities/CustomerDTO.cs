using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CustomerDTO: ICloneable
    {
        public virtual int CustomerId { get; set; }
        public virtual string CustomerName { get; set; }
        public virtual string CustomerCNIC{ get; set; }
        public virtual string CustomerPhoneNumber { get; set; }
        public virtual IList<OrderDTO> Orders { get; set; }

        public virtual object Clone()
        {
            var item = new CustomerDTO
            {
                CustomerId = CustomerId,
                CustomerName = CustomerName,
                CustomerCNIC = CustomerCNIC,
                CustomerPhoneNumber = CustomerPhoneNumber
            };
            return item;
        }

        public override bool Equals(object obj)
        {
            return ((CustomerDTO)obj).CustomerId == CustomerId;
        }
        public override int GetHashCode()
        {
            return CustomerId.GetHashCode();
        }
    }
}
