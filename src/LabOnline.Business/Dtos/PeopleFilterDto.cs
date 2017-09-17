using System;

namespace LabOnline.Business.Dtos
{
    public class PeopleFilterDto
    {
        public string SearchCondition { get; set; }
        public Guid Id { get; set; }

        public PeopleFilterDto()
        {
            Id = Guid.Empty;
        }
    }
}
