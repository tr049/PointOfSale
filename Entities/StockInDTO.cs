using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class StockInDTO
    {
        public virtual int StockInId { get; set; }
        public virtual DateTime Date { get; set; }
        public virtual string Description { get; set; }
        public virtual double Price { get; set; }
        public virtual int Quantity { get; set; }
        public virtual ProductDTO Product { get; set; }
        public override bool Equals(object obj)
        {
            try
            {
                StockInDTO temp = (StockInDTO)obj;
                return ((StockInDTO)obj).StockInId == StockInId;
            }
            catch
            {
                return false;
            }

        }
        public override int GetHashCode()
        {
            return StockInId.GetHashCode();
        }
    }
}
