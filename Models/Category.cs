using System.ComponentModel.DataAnnotations;

namespace BTK_Hackatlon_Project.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        [StringLength(50)]
        public string Icon { get; set; } = string.Empty;

        [StringLength(50)]
        public string Color { get; set; } = string.Empty;
    }
}
