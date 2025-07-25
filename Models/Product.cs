using System.ComponentModel.DataAnnotations;

namespace BTK_Hackatlon_Project.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;

        [StringLength(1000)]
        public string Description { get; set; } = string.Empty;

        [Required]
        [Range(0, double.MaxValue)]
        public decimal Price { get; set; }

        public decimal? OldPrice { get; set; }

        [StringLength(500)]
        public string ImageUrl { get; set; } = string.Empty;

        [StringLength(100)]
        public string Category { get; set; } = string.Empty;

        [Range(1, 5)]
        public int Rating { get; set; }

        public int ReviewCount { get; set; }

        [Range(0, 100)]
        public int DiscountPercentage { get; set; }

        public bool IsFlashSale { get; set; }
        public bool IsPopular { get; set; }
        public DateTime CreatedDate { get; set; }
    }

}
