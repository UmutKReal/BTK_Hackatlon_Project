namespace BTK_Hackatlon_Project.Models
{
    public class HomeViewModel
    {
        public List<Product> FlashSaleProducts { get; set; } = new();
        public List<Product> PopularProducts { get; set; } = new();
        public List<Category> Categories { get; set; } = new();
    }
}
