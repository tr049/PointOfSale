using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPortal.Controllers
{
    public class StockController : Controller
    {
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetStockIns());
        }

        // GET: StockIn/Details/5
        public ActionResult Details(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetStockIn(id));
        }

        // GET: StockIn/Create
        public ActionResult Create()
        {
            MyRepository repository = new MyRepository();
            ViewBag.Products = repository.GetProducts();
            return View();
        }

        // POST: StockIn/Create
        [HttpPost]
        public ActionResult Create(StockInDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.AddStockIn(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: StockIn/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            ViewBag.Products = repository.GetProducts();
            return View(repository.GetStockIn(id));
        }

        // POST: StockIn/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, StockInDTO obj)
        {
            obj.StockInId = id;
            try
            {
                MyRepository repository = new MyRepository();
                repository.UpdateStockIn(obj);

                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                return View();
            }
        }

        // GET: StockIn/Delete/5
        public ActionResult Delete(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetStockIn(id));
        }

        // POST: StockIn/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, StockInDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.DeleteStockIn(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
