using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmpAPIs.Data.Models
{
    [Table("Cities")]
    public class Emp
    {
        #region Constructor
        public Emp()
        {

        }
        #endregion

        #region Properties
        [Key]
        [Required]
        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }
        public DateTime DateOfJoining { get; set; }

        //public string EmailId { get; set; }

        //public string Gender { get; set; }

        //public string Address { get; set; }
        //public string PinCode { get; set; }

        #endregion

    }
}
