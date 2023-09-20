namespace tennisMatchApp.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Goals { get; set; }
        public DateTime Date { get; set; }
        public Boolean Deleted { get; set; }
    }
}
