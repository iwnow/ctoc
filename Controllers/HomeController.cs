using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Caching.Memory;

namespace Call2Collegs{
    
    public class HomeController : Controller{
        public IActionResult Index(){
            return View();
        }
    }
}