using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;

namespace SmartSchool_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
      public AlunoController(IRepository repo)
      {

      }
        [HttpGet]
        public IActionResult Get()
        {
            return  Ok("Aluno");
        }
    }
}
