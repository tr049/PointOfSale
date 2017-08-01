using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPortal.Controllers
{
    public class OrderDetailController : Controller
    {
        // GET: OrderDetail
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrderDetails());
        }

        // GET: OrderDetail/Details/5
        public ActionResult Details(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrderDetail(id));
        }

        // GET: OrderDetail/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: OrderDetail/Create
        [HttpPost]
        public ActionResult Create(OrderDetailDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.AddOrderDetail(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: OrderDetail/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetOrderDetail(id));
        }

        // POST: OrderDetail/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, OrderDetailDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.UpdateOrderDetail(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: OrderDetail/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: OrderDetail/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, OrderDetailDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.DeleteOrderDetail(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
