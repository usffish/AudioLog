using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using AudioLog.Models;

namespace AudioLog.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
// Routes to /Home/Analytics
    public IActionResult visualizations()
    {
        return View();
    }

    // Routes to /Home/About
    public IActionResult about()
    {
        return View();
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}