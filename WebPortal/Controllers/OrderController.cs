using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft;
using WebPortal.Models;

namespace WebPortal.Controllers
{
    public class OrderController : Controller
    {
        // GET: Order
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrders());
        }

        // GET: Order/Details/5
        public ActionResult Details(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrder(id));
        }

        // GET: Order/Create
        public ActionResult Create()
        {
            MyRepository repository = new MyRepository();
            ViewBag.Customers = repository.GetCustomers().ToList();
            ViewBag.Products = repository.GetAvailableProducts().ToList();
            return View();
        }

        // POST: Order/Create
        [HttpPost]
        public JsonResult Create(BigModelDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                obj.order.Customer = new CustomerDTO();
                if (obj.customer.CustomerId == 0)
                {
                    
                    obj.order.Customer.CustomerId = repository.AddCustomer(obj.customer);
                }
                obj.order.Customer.CustomerId = obj.customer.CustomerId;
                repository.AddOrder(obj.order);
                int orderId = obj.order.OrderId;
                foreach (var orderDetail in obj.orderDetail)
                {
                    orderDetail.Order = new OrderDTO();
                    orderDetail.Order.OrderId = orderId;
                    repository.AddOrderDetail(orderDetail);
                    int orderDetailId = orderDetail.OrderDetailId;

                    StockOutDTO stockOut = new StockOutDTO();
                    stockOut.Date = obj.order.Date;
                    stockOut.Description = "Simple Order";
                    stockOut.Price = orderDetail.Amount;
                    stockOut.Product = new ProductDTO();
                    stockOut.Product.ProductId = orderDetail.Product.ProductId;
                    stockOut.Quantity = orderDetail.Quantity;
                    stockOut.OrderDetail = new OrderDetailDTO();
                    stockOut.OrderDetail.OrderDetailId = orderDetailId;

                    repository.AddStockOut(stockOut);

                }
                return Json("Successfully added", JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json("Error while adding", JsonRequestBehavior.AllowGet);
            }
        }

        // GET: Order/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            ViewBag.Customers = repository.GetCustomers().ToList();
            ViewBag.Products = repository.GetAvailableProducts().ToList();
            return View(repository.GetOrder(id));
        }

        // POST: Order/Edit/5
        [HttpPost]
        public JsonResult Edit(int id, BigModelDTO obj)
        {
            MyRepository repository = new MyRepository();
            OrderDTO orderObj = repository.GetOrder(id);
            if (obj.customer.CustomerId == 0)
            {

                orderObj.Customer.CustomerId = repository.AddCustomer(obj.customer);
            }
            orderObj.Customer.CustomerId = obj.customer.CustomerId;
            repository.UpdateOrder(orderObj);

            foreach (var orderDetail in orderObj.OrderDetails)
            {
                foreach (var stockOut in orderDetail.StockOuts)
                {
                    repository.DeleteStockOut(stockOut.StockOutId);
                }
                repository.DeleteOrderDetail(orderDetail.OrderDetailId);
            }

            int orderId = orderObj.OrderId;
            foreach (var orderDetail in obj.orderDetail)
            {
                orderDetail.Order = new OrderDTO();
                orderDetail.Order.OrderId = orderId;
                repository.AddOrderDetail(orderDetail);
                int orderDetailId = orderDetail.OrderDetailId;

                StockOutDTO stockOut = new StockOutDTO();
                stockOut.Date = obj.order.Date;
                stockOut.Description = "Simple Order";
                stockOut.Price = orderDetail.Amount;
                stockOut.Product = new ProductDTO();
                stockOut.Product.ProductId = orderDetail.Product.ProductId;
                stockOut.Quantity = orderDetail.Quantity;
                stockOut.OrderDetail = new OrderDetailDTO();
                stockOut.OrderDetail.OrderDetailId = orderDetailId;

                repository.AddStockOut(stockOut);

            }

            return Json("Successfully updated", JsonRequestBehavior.AllowGet);
            
        }

        // GET: Order/Delete/5
        public ActionResult Delete(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrder(id));
        }

        // POST: Order/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, OrderDTO obj)
        {
                MyRepository repository = new MyRepository();
                repository.DeleteOrder(id);
                return RedirectToAction("Index");
            
        }
    }
}
