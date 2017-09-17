using LabOnline.Business.Interfaces;
using System;

namespace LabOnline.Business.Models
{
    public class BaseEntity: IEntity
    {
        /// <summary>
        /// User ID identification
        /// </summary>
        public Guid Id { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
        }
    }
}
