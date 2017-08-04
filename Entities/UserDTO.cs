using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class UserDTO
    {
        public virtual int UserId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Password { get; set; }

        public override bool Equals(object obj)
        {
            return ((UserDTO)obj).UserId == UserId;
        }
        public override int GetHashCode()
        {
            return UserId.GetHashCode();
        }
    }
}
