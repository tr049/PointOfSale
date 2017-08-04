using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    interface IStockOut
    {
        StockOutDTO GetStockOutById(int id);
        IList<StockOutDTO> GetAllStockOuts();
        int AddStockOut(StockOutDTO dto);
        int DeleteStockOut(StockOutDTO dto);
        int UpdateStockOut(StockOutDTO dto);
    }
}
