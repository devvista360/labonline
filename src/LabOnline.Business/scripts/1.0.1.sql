USE [Vista360]
GO
/****** Object:  Table [dbo].[v360_accesoweb]    Script Date: 10/31/2016 7:30:36 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[v360_accesoweb](
	[id] [uniqueidentifier] NOT NULL,
	[tipodocumento] [nvarchar](2) NOT NULL,
	[documento] [nvarchar](30) NOT NULL,
	[clave] [nvarchar](250) NOT NULL,
	[nombres] [nvarchar](60) NOT NULL,
	[apellidos] [nvarchar](60) NOT NULL,
	[tipousuario] [nvarchar](1) NOT NULL,
	[correo] [nvarchar](250) NOT NULL,
	[ingreso] [datetime] NOT NULL,
	[activo] [bit] NOT NULL,
	[correoconfirmado] [bit] NULL,
	[olvidoconfirmado] [bit] NULL,
	[modificacion] [datetime] NULL,
 CONSTRAINT [pk_v360_accesoweb] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[v360_accesoweb] ([id], [tipodocumento], [documento], [clave], [nombres], [apellidos], [tipousuario], [correo], [ingreso], [activo], [correoconfirmado], [olvidoconfirmado], [modificacion]) VALUES (N'f3834612-c196-e611-b670-00090ffe0001', N'CC', N'98123456', N'3456', N'Juan', N'Perez', N'P', N'jperez@gmail.com', CAST(N'2016-10-20T07:31:07.083' AS DateTime), 1, 1, NULL, CAST(N'2016-10-30T19:04:47.857' AS DateTime))
ALTER TABLE [dbo].[v360_accesoweb] ADD  CONSTRAINT [DF__v360_accesow__id__34C8D9D1]  DEFAULT (newsequentialid()) FOR [id]
GO
ALTER TABLE [dbo].[v360_accesoweb] ADD  CONSTRAINT [DF__v360_acce__ingre__35BCFE0A]  DEFAULT (getdate()) FOR [ingreso]
GO
ALTER TABLE [dbo].[v360_accesoweb] ADD  CONSTRAINT [DF__v360_acce__activ__36B12243]  DEFAULT ((1)) FOR [activo]
GO
ALTER TABLE [dbo].[v360_accesoweb] ADD  CONSTRAINT [DF__v360_acce__confi__37A5467C]  DEFAULT ((0)) FOR [correoconfirmado]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Identificación automática del registro.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'id'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tipo de identificación del usuario. Dominio: [AS, CC, CE, IN, MS, NU, PA, RC, TI]' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'tipodocumento'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Documento de identificación del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'documento'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Clave de acceso.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'clave'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Nombres del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'nombres'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Apellidos del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'apellidos'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tipo de usuario. Dominio: [P: Paciente, M: Médico remitente, E: Empresa]' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'tipousuario'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Dirección de correo electrónico.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'correo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Fecha de ingreso del registro del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'ingreso'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Indicador de activo o no del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'activo'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Indicador de que el usuario confirmó el correo.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'correoconfirmado'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Fecha de modificación del registro del usuario.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'v360_accesoweb', @level2type=N'COLUMN',@level2name=N'modificacion'
GO
