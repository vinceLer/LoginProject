namespace LoginProjectAPI.Models
{
    public class User
    {
        private int id;
        private string username;
        private string mail;
        private string password;

        public int Id { get => id; set => id = value; }
        public string Username { get => username; set => username = value; }
        public string Mail { get => mail; set => mail = value; }
        public string Password { get => password; set => password = value; }
    }
}
