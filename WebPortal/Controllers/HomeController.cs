using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPortal.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            ViewBag.Products = repository.GetAvailableProducts().ToList();
            List<StockOutDTO> lst = repository.GetStockOuts().ToList();
            ViewBag.Earning = lst;
            ViewBag.stockOut = lst.GroupBy(x => x.Product.ProductId)
                .Select(g => new StockOutDTO
                {
                    Quantity = g.Sum(c => c.Quantity),
                    Product = g.First().Product
                }).ToList();
                
                
            List<StockInDTO> stockIn = repository.GetStockIns().ToList().GroupBy(x => x.Product.ProductId)
                .Select(g => new StockInDTO
                {
                    Quantity = g.Sum(c => c.Quantity),
                    Product = g.First().Product
                }).ToList(); 
            ViewBag.StockIn = stockIn;
            ViewBag.ProductList = repository.GetProducts().ToList();
            ViewBag.TotalProductSold = lst.Sum(x => x.Quantity);
            ViewBag.ProductSoldlst = lst.GroupBy(x => x.Product.ProductId)
                .Select(g => new StockOutDTO
                {
                    Quantity = g.Sum(c => c.Quantity)
                }).Select(x => x.Quantity).ToList();
            ViewBag.NewOrder = repository.GetOrders().Where(x => x.Date.Day == DateTime.Now.Day).ToList().Count;
            ViewBag.CustomerCount = repository.GetCustomers().Count;
            return View();
        }
    }
}