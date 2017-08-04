using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPortal.Models
{
    public class BigModelDTO
    {
        public virtual CustomerDTO customer { get; set; }

        public virtual List<OrderDetailDTO> orderDetail { get; set; }

        public virtual OrderDTO order { get; set; }
    }
}