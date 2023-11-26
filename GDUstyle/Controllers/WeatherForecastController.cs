using GDUstyle.Models;
using Microsoft.AspNetCore.Mvc;

namespace GDUstyle.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        ApplicationContext db;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, ApplicationContext context)
        {
            _logger = logger;
            this.db = context;
        }

        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            try
            {
                IEnumerable<User> users = db.Users.Where(a => !a.Deleted).OrderBy(a => a.LastName).ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

        [HttpGet("[action]/{id}")]
        public ActionResult<User> GetUser(int userId)
        {
            try
            {
                User? user = db.Users.Find(userId);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

        [HttpPost("[action]")]
        public ActionResult<User> AddUser([FromForm] User user)
        {
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
                return Ok(user);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

        [HttpPost("[action]")]
        public ActionResult<User> EditUser([FromForm] User user)
        {
            try
            {
                db.Update(user);
                db.SaveChanges();
                return Ok(user);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }

        [HttpPost("[action]")]
        public ActionResult DeleteUser([FromForm] User user)
        {
            try
            {
                User? oldUser = db.Users.Find(user.Id);
                if (oldUser != null)
                {
                    oldUser.Deleted = true;
                    db.Update(oldUser);
                    db.SaveChanges();
                    return Ok();
                }
                return new BadRequestObjectResult("Объект был удалён ранее");
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }
    }
}