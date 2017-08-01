using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPortal.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetProducts());
        }

        // GET: Product/Details/5
        public ActionResult Details(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetProduct(id));
        }

        // GET: Product/Create
        public ActionResult Create()
        {
            MyRepository repository = new MyRepository();
            ViewBag.Categories = repository.GetCategorys();
            return View();
        }

        // POST: Product/Create
        [HttpPost]
        public ActionResult Create(ProductDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.AddProduct(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Product/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            ViewBag.Categories = repository.GetCategorys();
            return View(repository.GetProduct(id));
        }

        // POST: Product/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, ProductDTO obj)
        {
            obj.ProductId = id;
            try
            {
                MyRepository repository = new MyRepository();
                repository.UpdateProduct(obj);

                return RedirectToAction("Index");
            }
            catch(Exception e)
            {
                return View();
            }
        }

        // GET: Product/Delete/5
        public ActionResult Delete(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetProduct(id));
        }

        // POST: Product/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, ProductDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.DeleteProduct(id);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
