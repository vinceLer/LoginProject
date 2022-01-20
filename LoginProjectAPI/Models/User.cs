using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginProjectAPI.Models
{
    [Table(name: "loginUser")]
    public class User
    {
        private int id;
        private string username;
        private string mail;
        private string password;

        [Key] public int Id { get => id; set => id = value; }
        [Required] public string Username { get => username; set => username = value; }
        [Required] public string Mail { get => mail; set => mail = value; }
        [Required] public string Password { get => password; set => password = value; }
    }
}
