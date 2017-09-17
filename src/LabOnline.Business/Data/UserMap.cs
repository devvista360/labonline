using LabOnline.Business.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace LabOnline.Business.Data
{
    public class UserMap
    {
        public UserMap(EntityTypeBuilder<User> model)
        {
            model.ToTable("v360_accesoweb");

            model.HasKey(m => m.Id);
            model.Property(m => m.Id).HasColumnName("Id").IsRequired();
            model.Property(m => m.IdType).HasColumnName("tipodocumento").HasMaxLength(2).IsRequired();
            model.Property(m => m.UserId).HasColumnName("documento").HasMaxLength(30).IsRequired();
            model.Property(m => m.Password).HasColumnName("clave").HasMaxLength(250).IsRequired().HasDefaultValue("1234");
            model.Property(m => m.Email).HasColumnName("correo").HasMaxLength(250).IsRequired();
            model.Property(m => m.FirstName).HasColumnName("nombres").HasMaxLength(60).IsRequired();
            model.Property(m => m.LastName).HasColumnName("apellidos").HasMaxLength(60).IsRequired();
            model.Property(m => m.UserType).HasColumnName("tipousuario").HasMaxLength(1).IsRequired();
            model.Property(m => m.Created).HasColumnName("ingreso").HasMaxLength(1).IsRequired().HasDefaultValue(DateTime.Now);
            model.Property(m => m.IsActive).HasColumnName("activo").IsRequired().HasDefaultValue(true);
            model.Property(m => m.IsConfirmed).HasColumnName("correoconfirmado");
            model.Property(m => m.IsReseted).HasColumnName("olvidoconfirmado");
            model.Property(m => m.Updated).HasColumnName("modificacion");
            model.Property(m => m.LastActivity).HasColumnName("actividad");

            model.HasIndex(b => b.Email);
            model.HasIndex(p => new { p.UserId, p.IdType, p.UserType });
        }
    }
}
