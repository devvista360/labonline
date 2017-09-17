using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using LabOnline.Business.Data;

namespace LabOnline.Business.Migrations
{
    [DbContext(typeof(LabDbContext))]
    [Migration("20161020114328_Vista360")]
    partial class Vista360
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LabOnline.Database.Models.LabWebUser", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<bool>("Active")
                        .HasColumnName("activo");

                    b.Property<bool>("Confirmed")
                        .HasColumnName("confirmado");

                    b.Property<DateTime>("DateCreated")
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnName("ingreso");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnName("modificacion");

                    b.Property<string>("DocumentId")
                        .IsRequired()
                        .HasColumnName("documento")
                        .HasAnnotation("MaxLength", 30);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnName("correo")
                        .HasAnnotation("MaxLength", 250);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnName("nombres")
                        .HasAnnotation("MaxLength", 60);

                    b.Property<string>("IdType")
                        .IsRequired()
                        .HasColumnName("tipodocumento")
                        .HasAnnotation("MaxLength", 2);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnName("apellidos")
                        .HasAnnotation("MaxLength", 60);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnName("clave")
                        .HasAnnotation("MaxLength", 250);

                    b.Property<string>("UserType")
                        .IsRequired()
                        .HasColumnName("tipousuario")
                        .HasAnnotation("MaxLength", 1);

                    b.HasKey("UserId");

                    b.ToTable("v360_accesoweb");
                });
        }
    }
}
