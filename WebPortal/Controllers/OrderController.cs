using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            return View();
        }

        // POST: Order/Create
        [HttpPost]
        public ActionResult Create(OrderDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.AddOrder(obj);
                ViewBag.Customers = repository.GetCustomers();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Order/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrder(id));
        }

        // POST: Order/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, OrderDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.UpdateOrder(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Order/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Order/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, OrderDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.DeleteOrder(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
