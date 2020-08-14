using System.IO;
using System.Web;
using System.Web.Mvc;

namespace Tester2.Controllers
{
    public class HomeController : Controller
    {
        //GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpGet]
        public ActionResult Upload()
        {
          
            return View();
        }
        [HttpPost]
        public ContentResult Upload(string str)
        {
            string path = Server.MapPath("~/Upload");
            if(!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            foreach (string key in Request.Files)
            {
                HttpPostedFileBase postedFile = Request.Files[key];
                postedFile.SaveAs(path + postedFile.FileName);
            }
            return Content("Success");
        }
    }
}
