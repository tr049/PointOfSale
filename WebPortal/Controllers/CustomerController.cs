using Entities;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebPortal.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult Index()
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetCustomers());
        }

        // GET: Customer/Details/5
        public ActionResult Details(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetCustomer(id));
        }

        // GET: Customer/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Customer/Create
        [HttpPost]
        public ActionResult Create(CustomerDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.AddCustomer(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Customer/Edit/5
        public ActionResult Edit(int id)
        {
            MyRepository repository = new MyRepository();
            return View(repository.GetCustomer(id));
        }

        // POST: Customer/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, CustomerDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.UpdateCustomer(obj);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Customer/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Customer/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, CustomerDTO obj)
        {
            try
            {
                MyRepository repository = new MyRepository();
                repository.DeleteCustomer(obj);
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
