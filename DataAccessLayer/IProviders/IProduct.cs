using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IProviders
{
    public interface IProduct
    {
        ProductDTO GetProductById(int id);
        IList<ProductDTO> GetAllProducts();
        int AddProduct(ProductDTO dto);
        int DeleteProduct(ProductDTO dto);
        int UpdateProduct(ProductDTO dto);
        IList<ProductStockDTO> AvailableProductInStock();

    }
}
