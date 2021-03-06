USE [master]
GO
/****** Object:  Database [PointOfSale]    Script Date: 8/7/2017 6:30:48 PM ******/
CREATE DATABASE [PointOfSale]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PointOfSale', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\PointOfSale.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'PointOfSale_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\PointOfSale_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [PointOfSale] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PointOfSale].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PointOfSale] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PointOfSale] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PointOfSale] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PointOfSale] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PointOfSale] SET ARITHABORT OFF 
GO
ALTER DATABASE [PointOfSale] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PointOfSale] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [PointOfSale] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PointOfSale] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PointOfSale] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PointOfSale] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PointOfSale] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PointOfSale] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PointOfSale] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PointOfSale] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PointOfSale] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PointOfSale] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PointOfSale] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PointOfSale] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PointOfSale] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PointOfSale] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PointOfSale] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PointOfSale] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PointOfSale] SET RECOVERY FULL 
GO
ALTER DATABASE [PointOfSale] SET  MULTI_USER 
GO
ALTER DATABASE [PointOfSale] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PointOfSale] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PointOfSale] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PointOfSale] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PointOfSale', N'ON'
GO
USE [PointOfSale]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Category](
	[categoryId] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[type] [varchar](50) NULL,
 CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED 
(
	[categoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Customer](
	[customerId] [int] IDENTITY(1,1) NOT NULL,
	[customerName] [varchar](50) NOT NULL,
	[customerPhoneNumber] [varchar](11) NOT NULL,
	[customerCNIC] [varchar](13) NOT NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[customerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OrderDetail]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetail](
	[orderDetailId] [int] IDENTITY(1,1) NOT NULL,
	[productId] [int] NULL,
	[quantity] [int] NULL,
	[amount] [float] NULL,
	[orderId] [int] NULL,
 CONSTRAINT [PK_OrderDetail] PRIMARY KEY CLUSTERED 
(
	[orderDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Orders]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[orderId] [int] IDENTITY(1,1) NOT NULL,
	[discount] [int] NOT NULL,
	[date] [date] NOT NULL,
	[customerId] [int] NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[orderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Product](
	[productId] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[description] [varchar](100) NULL,
	[categoryId] [int] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[productId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[StockIn]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[StockIn](
	[stockInId] [int] IDENTITY(1,1) NOT NULL,
	[date] [date] NULL,
	[description] [varchar](50) NULL,
	[quantity] [int] NULL,
	[productId] [int] NULL,
	[price] [float] NULL,
 CONSTRAINT [PK_StockIn_1] PRIMARY KEY CLUSTERED 
(
	[stockInId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[StockOut]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[StockOut](
	[stockOutId] [int] IDENTITY(1,1) NOT NULL,
	[date] [date] NULL,
	[description] [varchar](50) NULL,
	[quantity] [int] NULL,
	[productId] [int] NULL,
	[orderDetailId] [int] NULL,
	[price] [float] NULL,
 CONSTRAINT [PK_StockIn] PRIMARY KEY CLUSTERED 
(
	[stockOutId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User]    Script Date: 8/7/2017 6:30:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[User](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[password] [varchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[OrderDetail]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetail_Order] FOREIGN KEY([orderId])
REFERENCES [dbo].[Orders] ([orderId])
GO
ALTER TABLE [dbo].[OrderDetail] CHECK CONSTRAINT [FK_OrderDetail_Order]
GO
ALTER TABLE [dbo].[OrderDetail]  WITH CHECK ADD  CONSTRAINT [FK_OrderDetail_Product] FOREIGN KEY([productId])
REFERENCES [dbo].[Product] ([productId])
GO
ALTER TABLE [dbo].[OrderDetail] CHECK CONSTRAINT [FK_OrderDetail_Product]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Order_Customer] FOREIGN KEY([customerId])
REFERENCES [dbo].[Customer] ([customerId])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Order_Customer]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category] FOREIGN KEY([categoryId])
REFERENCES [dbo].[Category] ([categoryId])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Category]
GO
ALTER TABLE [dbo].[StockIn]  WITH CHECK ADD  CONSTRAINT [FK_StockIn_Product1] FOREIGN KEY([productId])
REFERENCES [dbo].[Product] ([productId])
GO
ALTER TABLE [dbo].[StockIn] CHECK CONSTRAINT [FK_StockIn_Product1]
GO
ALTER TABLE [dbo].[StockOut]  WITH CHECK ADD  CONSTRAINT [FK_StockIn_OrderDetail] FOREIGN KEY([orderDetailId])
REFERENCES [dbo].[OrderDetail] ([orderDetailId])
GO
ALTER TABLE [dbo].[StockOut] CHECK CONSTRAINT [FK_StockIn_OrderDetail]
GO
ALTER TABLE [dbo].[StockOut]  WITH CHECK ADD  CONSTRAINT [FK_StockIn_Product] FOREIGN KEY([productId])
REFERENCES [dbo].[Product] ([productId])
GO
ALTER TABLE [dbo].[StockOut] CHECK CONSTRAINT [FK_StockIn_Product]
GO
USE [master]
GO
ALTER DATABASE [PointOfSale] SET  READ_WRITE 
GO
