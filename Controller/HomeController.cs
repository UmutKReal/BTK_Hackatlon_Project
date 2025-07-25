using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BTK_Hackatlon_Project.Models;

namespace BTK_Hackatlon_Project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var viewModel = new HomeViewModel
            {
                Categories = GetCategories(),
                FlashSaleProducts = GetFlashSaleProducts(),
                PopularProducts = GetPopularProducts()
            };

            return View(viewModel);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private List<Category> GetCategories()
        {
            return new List<Category>
            {
                new Category { Id = 1, Name = "Kadın Giyim", Icon = "fas fa-tshirt", Color = "text-primary" },
                new Category { Id = 2, Name = "Erkek Giyim", Icon = "fas fa-user-tie", Color = "text-info" },
                new Category { Id = 3, Name = "Çocuk & Bebek", Icon = "fas fa-baby", Color = "text-warning" },
                new Category { Id = 4, Name = "Ev & Yaşam", Icon = "fas fa-home", Color = "text-success" },
                new Category { Id = 5, Name = "Elektronik", Icon = "fas fa-laptop", Color = "text-dark" },
                new Category { Id = 6, Name = "Takı & Aksesuar", Icon = "fas fa-gem", Color = "text-danger" }
            };
        }

        private List<Product> GetFlashSaleProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Kadın Kışlık Mont",
                    Price = 199.99m,
                    OldPrice = 569.99m,
                    ImageUrl = "https://via.placeholder.com/300x300/F8F9FA/333333?text=Mont",
                    Category = "Kadın Giyim",
                    Rating = 4,
                    ReviewCount = 124,
                    DiscountPercentage = 65,
                    IsFlashSale = true
                },
                new Product
                {
                    Id = 2,
                    Name = "Erkek Spor Ayakkabı",
                    Price = 299.99m,
                    OldPrice = 599.99m,
                    ImageUrl = "https://via.placeholder.com/300x300/F8F9FA/333333?text=Ayakkabı",
                    Category = "Erkek Giyim",
                    Rating = 5,
                    ReviewCount = 89,
                    DiscountPercentage = 50,
                    IsFlashSale = true
                },
                new Product
                {
                    Id = 3,
                    Name = "Bluetooth Kulaklık",
                    Price = 149.99m,
                    OldPrice = 249.99m,
                    ImageUrl = "https://via.placeholder.com/300x300/F8F9FA/333333?text=Kulaklık",
                    Category = "Elektronik",
                    Rating = 4,
                    ReviewCount = 67,
                    DiscountPercentage = 40,
                    IsFlashSale = true
                },
                new Product
                {
                    Id = 4,
                    Name = "Akıllı Saat",
                    Price = 1299.99m,
                    OldPrice = 1999.99m,
                    ImageUrl = "https://via.placeholder.com/300x300/F8F9FA/333333?text=Saat",
                    Category = "Elektronik",
                    Rating = 5,
                    ReviewCount = 156,
                    DiscountPercentage = 35,
                    IsFlashSale = true
                }
            };
        }

        private List<Product> GetPopularProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    Id = 5,
                    Name = "Kadın Triko Kazak",
                    Price = 89.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Kazak",
                    Category = "Kadın Giyim",
                    Rating = 4,
                    ReviewCount = 45,
                    IsPopular = true
                },
                new Product
                {
                    Id = 6,
                    Name = "Erkek Jean Pantolon",
                    Price = 159.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Jean",
                    Category = "Erkek Giyim",
                    Rating = 4,
                    ReviewCount = 78,
                    IsPopular = true
                },
                new Product
                {
                    Id = 7,
                    Name = "Çocuk Sweatshirt",
                    Price = 79.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Sweat",
                    Category = "Çocuk & Bebek",
                    Rating = 5,
                    ReviewCount = 23,
                    IsPopular = true
                },
                new Product
                {
                    Id = 8,
                    Name = "Ev Tekstili",
                    Price = 49.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Tekstil",
                    Category = "Ev & Yaşam",
                    Rating = 4,
                    ReviewCount = 34,
                    IsPopular = true
                },
                new Product
                {
                    Id = 9,
                    Name = "Telefon Kılıfı",
                    Price = 29.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Kılıf",
                    Category = "Elektronik",
                    Rating = 3,
                    ReviewCount = 67,
                    IsPopular = true
                },
                new Product
                {
                    Id = 10,
                    Name = "Kozmetik Ürünü",
                    Price = 119.99m,
                    ImageUrl = "https://via.placeholder.com/200x200/F8F9FA/333333?text=Kozmetik",
                    Category = "Güzellik",
                    Rating = 5,
                    ReviewCount = 91,
                    IsPopular = true
                }
            };
        }
    }
}
