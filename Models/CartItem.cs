using System.ComponentModel.DataAnnotations;

namespace BTK_Hackatlon_Project.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        public DateTime AddedDate { get; set; }

        // Navigation Properties
        public virtual User User { get; set; } = null!;
        public virtual Product Product { get; set; } = null!;
    }

}
