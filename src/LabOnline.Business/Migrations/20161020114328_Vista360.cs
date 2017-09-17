using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LabOnline.Business.Migrations
{
    public partial class Vista360 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "v360_accesoweb",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false, defaultValueSql: "newsequentialid()"),
                    tipodocumento = table.Column<string>(maxLength: 2, nullable: false),
                    documento = table.Column<string>(maxLength: 30, nullable: false),
                    clave = table.Column<string>(maxLength: 250, nullable: false),
                    nombres = table.Column<string>(maxLength: 60, nullable: false),
                    apellidos = table.Column<string>(maxLength: 60, nullable: false),
                    tipousuario = table.Column<string>(maxLength: 1, nullable: false),
                    correo = table.Column<string>(maxLength: 250, nullable: false),
                    ingreso = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    activo = table.Column<bool>(nullable: false, defaultValueSql: "1"),
                    confirmado = table.Column<bool>(nullable: false, defaultValueSql: "0"),                    
                    modificacion = table.Column<DateTime>(nullable: true)                    
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_v360_accesoweb", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "v360_accesoweb");
        }
    }
}
