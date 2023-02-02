using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BooWho.Controllers
{
    public class HauntController : Controller
    {
        // GET: HauntController
        public ActionResult Index()
        {
            return View();
        }

        // GET: HauntController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: HauntController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: HauntController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HauntController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: HauntController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: HauntController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: HauntController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
