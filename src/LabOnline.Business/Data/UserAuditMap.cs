using LabOnline.Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace LabOnline.Business.Data
{
    public class UserAuditMap
    {
        public UserAuditMap(EntityTypeBuilder<UserAudit> model)
        {
            model.ToTable("v360_auditoria");

            model.HasKey(m => m.Id);
            model.Property(m => m.Id).HasColumnName("Id").IsRequired();
            model.Property(m => m.UserCode).HasColumnName("usuario").HasMaxLength(40).IsRequired();
            model.Property(m => m.UserName).HasColumnName("nombrecompleto").HasMaxLength(100).IsRequired();
            model.Property(m => m.Email).HasColumnName("correo").HasMaxLength(250);
            model.Property(m => m.IpAddress).HasColumnName("direccionip").HasMaxLength(20).IsRequired();
            model.Property(m => m.Subject).HasColumnName("asunto").HasMaxLength(250).IsRequired();
            model.Property(m => m.Content).HasColumnName("contenido").HasMaxLength(2000).IsRequired();
            model.Property(m => m.Created).HasColumnName("registro").HasMaxLength(1).IsRequired().HasDefaultValue(DateTime.Now);
            model.Property(m => m.UserId).HasColumnName("usuarioid");
            model.Property(m => m.UpdatedBy).HasColumnName("actualizadopor");

            model.HasIndex(b => b.UserId);
            model.HasIndex(b => b.UserName);
        }
    }
}
