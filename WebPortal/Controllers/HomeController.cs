using Entities;
using NHibernateCore;
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
            NHibernateHelper obj = new NHibernateHelper();
            return View(obj.GetAllProducts());
        }
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(ProductDTO dto)
        {
            NHibernateHelper obj = new NHibernateHelper();
            obj.AddProductDTO(dto);
            return RedirectToAction("Index");
        }
    }
}