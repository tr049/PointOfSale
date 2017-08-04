using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class StockOutDTO
    {
        public virtual int StockOutId { get; set; }
        public virtual DateTime Date { get; set; }
        public virtual string Description { get; set; }
        public virtual int Quantity{ get; set; }
        public virtual ProductDTO Product { get; set; }
        public virtual OrderDetailDTO OrderDetail { get; set; }

        public override bool Equals(object obj)
        {
            try
            {
                StockOutDTO temp = (StockOutDTO)obj;
                return ((StockOutDTO)obj).StockOutId == StockOutId;
            }
            catch
            {
                return false;
            }

        }
        public override int GetHashCode()
        {
            return StockOutId.GetHashCode();
        }
    }
}
