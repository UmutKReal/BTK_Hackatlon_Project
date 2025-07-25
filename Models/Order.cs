using System.ComponentModel.DataAnnotations;

namespace BTK_Hackatlon_Project.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        [StringLength(20)]
        public string OrderNumber { get; set; } = string.Empty;

        public int UserId { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public decimal TotalAmount { get; set; }

        [StringLength(500)]
        public string ShippingAddress { get; set; } = string.Empty;

        public OrderStatus Status { get; set; }
        public DateTime OrderDate { get; set; }

        // Navigation Properties
        public virtual User User { get; set; } = null!;
        public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }

}
