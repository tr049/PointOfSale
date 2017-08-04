using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    interface IStockIn
    {
        StockInDTO GetStockInById(int id);
        IList<StockInDTO> GetAllStockIns();
        int AddStockIn(StockInDTO dto);
        int DeleteStockIn(StockInDTO dto);
        int UpdateStockIn(StockInDTO dto);
    }
}
