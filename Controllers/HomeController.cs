using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Caching.Memory;

using Call2Collegs.Services;
using Call2Collegs.Model;

namespace Call2Collegs{
    
    public class HomeController : Controller{
        readonly IDataAccessProvider _dataProvider;
        public HomeController(IDataAccessProvider dataProvider){
            this._dataProvider = dataProvider;
        }
        
        static long _id = 0;
        public IActionResult Index(){
            //Console.WriteLine(ViewBag.val);
            var u = new User { Id = ++_id, Login = "tester", Password = "pass"};
            _dataProvider.Add(u);
            var all = _dataProvider.Get();
            return View(all);
        }
    }
}