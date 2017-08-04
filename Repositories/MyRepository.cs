using DataAccessLayer.Data_Provider;
using DataAccessLayer.IProviders;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class MyRepository
    {
        public MyRepository()
        {
        }

        //Product Functions

        public int AddProduct(ProductDTO obj)
        {
            ProductProvider provider = new ProductProvider();
            if(provider.GetProductById(obj.ProductId) == null)
            {
                provider.AddProduct(obj);
                return 1;
            }
            return -1;
        }

        public ProductDTO GetProduct(int id)
        {
            ProductProvider provider = new ProductProvider();
            return provider.GetProductById(id);     
        }
        
        public IList<ProductDTO> GetProducts()
        {
            ProductProvider provider = new ProductProvider();
            return provider.GetAllProducts();
        }

        public IList<ProductStockDTO> GetAvailableProducts()
        {
            ProductProvider provider = new ProductProvider();
            return provider.AvailableProductInStock();
        }

        public int UpdateProduct(ProductDTO obj)
        {
            ProductProvider provider = new ProductProvider();
            return provider.UpdateProduct(obj);
        }

        public int DeleteProduct(int id)
        {
            ProductProvider provider = new ProductProvider();
            var obj = provider.GetProductById(id);
            if ( obj != null)
            {
                provider.DeleteProduct(obj);
                return 1;
            }
            return -1;
        }

        // Category Functions started
        public int AddCategory(CategoryDTO obj)
        {
            CategoryProvider provider = new CategoryProvider();
            if (provider.GetCategoryById(obj.CategoryId) == null)
            {
                provider.AddCategory(obj);
                return 1;
            }
            return -1;
        }

        public CategoryDTO GetCategory(int id)
        {
            CategoryProvider provider = new CategoryProvider();
            return provider.GetCategoryById(id);
        }

        public IList<CategoryDTO> GetCategorys()
        {
            CategoryProvider provider = new CategoryProvider();
            return provider.GetAllCategorys();
        }

        public int UpdateCategory(CategoryDTO obj)
        {
            CategoryProvider provider = new CategoryProvider();
            return provider.UpdateCategory(obj);
        }

        public int DeleteCategory(int id)
        {
            CategoryProvider provider = new CategoryProvider();
            var obj = provider.GetCategoryById(id);
            if ( obj != null)
            {
                provider.DeleteCategory(obj);
                return 1;
            }
            return -1;
        }


        // Customer Functions started
        public int AddCustomer(CustomerDTO obj)
        {
            CustomerProvider provider = new CustomerProvider();
            if (provider.GetCustomerById(obj.CustomerId) == null)
            {
                provider.AddCustomer(obj);
                return 1;
            }
            return -1;
        }

        public CustomerDTO GetCustomer(int id)
        {
            CustomerProvider provider = new CustomerProvider();
            return provider.GetCustomerById(id);
        }

        public IList<CustomerDTO> GetCustomers()
        {
            CustomerProvider provider = new CustomerProvider();
            return provider.GetAllCustomers();
        }

        public int UpdateCustomer(CustomerDTO obj)
        {
            CustomerProvider provider = new CustomerProvider();
            return provider.UpdateCustomer(obj);
        }

        public int DeleteCustomer(int id)
        {
            CustomerProvider provider = new CustomerProvider();
            var obj = provider.GetCustomerById(id);
            if ( obj != null)
            {
                provider.DeleteCustomer(obj);
                return 1;
            }
            return -1;
        }

        // Order Functions started
        public int AddOrder(OrderDTO obj)
        {
            OrderProvider provider = new OrderProvider();
            if (provider.GetOrderById(obj.OrderId) == null)
            {
                provider.AddOrder(obj);
                return 1;
            }
            return -1;
        }

        public OrderDTO GetOrder(int id)
        {
            OrderProvider provider = new OrderProvider();
            return provider.GetOrderById(id);
        }

        public IList<OrderDTO> GetOrders()
        {
            OrderProvider provider = new OrderProvider();
            return provider.GetAllOrders();
        }

        public int UpdateOrder(OrderDTO obj)
        {
            OrderProvider provider = new OrderProvider();
            return provider.UpdateOrder(obj);
        }

        public int DeleteOrder(int id)
        {
            OrderProvider provider = new OrderProvider();
            OrderDTO obj = provider.GetOrderById(id);
            var orderDet = new OrderDetailProvider();
            foreach (var det in obj.OrderDetails)
            {
                var stPro = new StockOutProvider();
                foreach (var stOut in det.StockOuts)
                {
                    stPro.DeleteStockOut(stOut);
                }
                orderDet.DeleteOrderDetail(det);
            }
            if ( obj != null)
            {
                provider.DeleteOrder(obj);
                return 1;
            }
            return -1;
        }

        // OrderDetail Functions started
        public int AddOrderDetail(OrderDetailDTO obj)
        {
            OrderDetailProvider provider = new OrderDetailProvider();
            if (provider.GetOrderDetailById(obj.OrderDetailId) == null)
            {
                provider.AddOrderDetail(obj);
                return 1;
            }
            return -1;
        }

        public OrderDetailDTO GetOrderDetail(int id)
        {
            OrderDetailProvider provider = new OrderDetailProvider();
            return provider.GetOrderDetailById(id);
        }

        public IList<OrderDetailDTO> GetOrderDetails()
        {
            OrderDetailProvider provider = new OrderDetailProvider();
            return provider.GetAllOrderDetails();
        }

        public int UpdateOrderDetail(OrderDetailDTO obj)
        {
            OrderDetailProvider provider = new OrderDetailProvider();
            return provider.UpdateOrderDetail(obj);
        }

        public int DeleteOrderDetail(int id)
        {
            OrderDetailProvider provider = new OrderDetailProvider();
            var obj = provider.GetOrderDetailById(id);
            if ( obj != null)
            {
                provider.DeleteOrderDetail(obj);
                return 1;
            }
            return -1;
        }

        //StockIn Functions

        public int AddStockIn(StockInDTO obj)
        {
            StockInProvider provider = new StockInProvider();
            if (provider.GetStockInById(obj.StockInId) == null)
            {
                provider.AddStockIn(obj);
                return 1;
            }
            return -1;
        }

        public StockInDTO GetStockIn(int id)
        {
            StockInProvider provider = new StockInProvider();
            return provider.GetStockInById(id);
        }

        public IList<StockInDTO> GetStockIns()
        {
            StockInProvider provider = new StockInProvider();
            return provider.GetAllStockIns();
        }

        public int UpdateStockIn(StockInDTO obj)
        {
            StockInProvider provider = new StockInProvider();
            return provider.UpdateStockIn(obj);
        }

        public int DeleteStockIn(int id)
        {
            StockInProvider provider = new StockInProvider();
            var obj = provider.GetStockInById(id);
            if (obj != null)
            {
                provider.DeleteStockIn(obj);
                return 1;
            }
            return -1;
        }

        //StockOut Functions

        public int AddStockOut(StockOutDTO obj)
        {
            StockOutProvider provider = new StockOutProvider();
            if (provider.GetStockOutById(obj.StockOutId) == null)
            {
                provider.AddStockOut(obj);
                return 1;
            }
            return -1;
        }

        public StockOutDTO GetStockOut(int id)
        {
            StockOutProvider provider = new StockOutProvider();
            return provider.GetStockOutById(id);
        }

        public IList<StockOutDTO> GetStockOuts()
        {
            StockOutProvider provider = new StockOutProvider();
            return provider.GetAllStockOuts();
        }

        public int UpdateStockOut(StockOutDTO obj)
        {
            StockOutProvider provider = new StockOutProvider();
            return provider.UpdateStockOut(obj);
        }

        public int DeleteStockOut(int id)
        {
            StockOutProvider provider = new StockOutProvider();
            var obj = provider.GetStockOutById(id);
            if (obj != null)
            {
                provider.DeleteStockOut(obj);
                return 1;
            }
            return -1;
        }


    }
}
