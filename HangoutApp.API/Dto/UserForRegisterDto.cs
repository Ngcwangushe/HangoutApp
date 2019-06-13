using System.ComponentModel.DataAnnotations;

namespace HangoutApp.API.Dto
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Must specify password")]
        public string Password { get; set; }
    }
}