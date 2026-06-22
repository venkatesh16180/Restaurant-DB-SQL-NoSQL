-- Creating the Resturant Management System and selecting it
CREATE DATABASE IF NOT EXISTS restaurant;
use restaurant;

-- Creating and Inserting data into Customers Table

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(45) NOT NULL,
    LastName VARCHAR(45),
    PhoneNo VARCHAR(15) NOT NULL,
    Email VARCHAR(30)
);

INSERT INTO Customers VALUES
	("1","John","Doe","555-123-4567","john.doe@example.com"),
	("2","Jane","Doe","520-123-4567","jane.doe@example.com"),
	("3","John","","904-123-4567","Jon@example.com"),
	("4","Michael","","555-345-6789",""),
	("5","Sarah","Johnson","555-456-7890","sarah.johnson@example.com"),
	("6","Jessica","","555-567-8901","jess@example.com"),
	("7","David","Brown","555-678-9012","david.brown@example.com"),
	("8","Laura","","555-789-0123",""),
	("9","Daniel","White","555-890-1234","daniel.white@example.com"),
	("10","Sophia","","555-901-2345","Sophia@example.com"),
	("11","Maria","Copp","520-123-4567","maria.copp@example.com");


-- Creating and Inserting data into Membership Table
 
 CREATE TABLE Membership (
    MembershipID BIGINT PRIMARY KEY,
    MembershipType ENUM('Gold', 'Silver', 'Bronze') NOT NULL,
    StartDate DATE NOT NULL,
    ExpirationDate DATE NOT NULL,
    Customers_CustomerID INT,
    FOREIGN KEY (Customers_CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Membership VALUES 
	("20250120001","Gold","2025-01-20","2026-01-19",1),
    ("20250120002","Silver","2025-02-20","2026-02-19",2),
	("20250120003","Silver","2025-01-01","2025-12-31",3),
	("20250120004","Gold","2025-02-14","2026-02-13",4),
	("20240120005","Bronze","2024-04-20","2025-04-19",5),
	("20250120006","Bronze","2025-02-17","2026-02-16",6),
	("20240120007","Silver","2024-03-03","2025-02-03",7),
	("20240120008","Gold","2024-10-23","2025-10-22",8),
	("20240120009","Gold","2024-11-23","2025-11-22",9),
	("202401200010","Gold","2024-07-15","2025-07-14",10),
	("202401200011","Silver","2024-04-17","2025-04-16",11);


-- Creating and Inserting data into Feedback Table

CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY,
    Rating ENUM('1', '2', '3', '4', '5'),
    Comment VARCHAR(200),
    Customers_CustomerID INT,
    FOREIGN KEY (Customers_CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Feedback VALUES 
	(1, 1, 'Terrible Food! Its either too spicy or too salty.', 6),
	(2, 3, 'Love the food but late service', 4),
	(3, 4, 'Love the food but lack of options in the appetizers', 4),
	(4, 5, "I love the resaurant's ambiance. Food and Staff were great. The staff were abit late due to the huge crowd but that’s understandable due to the great food that this restaurant provides.", 11),
	(5, 2, 'good food. Everything else could use some improvement', 3),
	(6, 5, '', 9);


-- Creating and Inserting data into Tables Table

CREATE TABLE Tables (
    TableID INT PRIMARY KEY,
    TableNumber TINYINT,
    Capacity TINYINT
);

INSERT INTO Tables VALUES
	(202401,1,5),
	(202402,2,12),
	(202503,3,2),
	(202504,4,7),
	(202405,5,9),
	(202406,6,6),
	(202507,7,4);


-- Creating and Inserting data into Reservations Table

CREATE TABLE Reservations (
    ReservationID INT PRIMARY KEY,
    ReservationDate DATE NOT NULL,
    ReservationTime TIME NOT NULL,
    NumberofGuests TINYINT NOT NULL,
    Customers_CustomerID INT,
    Tables_TableID INT NOT NULL,
    FOREIGN KEY (Customers_CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (Tables_TableID) REFERENCES Tables(TableID)
);

INSERT INTO Reservations VALUES
	(2024001,"2024-3-3","17:00:00",5,7,202401),
	(2024002,"2024-4-20","15:30:00",10,5,202402),
	(2024003,"2024-10-23","18:00:00",5,8,202504),
	(2024004,"2024-11-23","19:30:00",6,9,202504),
	(2024005,"2024-11-25","18:00:00",5,5,202402),
	(2024006,"2024-11-29","18:30:00",8,10,202405),
	(2024007,"2024-12-25","19:00:00",2,11,202503),
	(2024008,"2024-12-25","19:00:00",6,7,202406),
	(2024009,"2024-12-26","20:00:00",2,11,202503),
	(2025001,"2025-1-1","19:00:00",4,3,202507),
	(2025002,"2025-2-14","20:30:00",2,1,202507),
	(2025003,"2025-1-26","17:00:00",12,6,202402),
	(2025004,"2025-2-14","20:00:00",2,4,202503),
	(2025005,"2025-2-20","11:00:00",9,2,202405);


-- Creating and Inserting data into Orders Table

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    TotalAmount DOUBLE,
    OrderDate DATE,
    Status ENUM('Pending', 'Completed'),
    Reservations_ReservationID INT,
    FOREIGN KEY (Reservations_ReservationID) REFERENCES Reservations(ReservationID)
);

INSERT INTO Orders VALUES
	(1,137.85,"2024-3-3","Completed",2024001),
	(2,299.7,"2024-4-20","Completed",2024002),
	(3,163.85,"2024-10-23","Completed",2024003),
	(4,179.82,"2024-11-23","Completed",2024004),
	(5,128.85,"2024-11-25","Completed",2024005),
	(6,279.76,"2024-11-29","Completed",2024006),
	(7,58.94,"2024-12-25","Completed",2024007),
	(8,143.28,"2024-12-25","Completed",2024008),
	(9,69.94,"2024-12-26","Completed",2024009),
	(10,111.88,"2025-1-1","Completed",2025001),
	(11,53.94,"2025-2-14","Completed",2025002),
	(12,359.64,"2025-1-26","Completed",2025003),
	(13,61.94,"2025-2-14","Completed",2025004),
	(14,314.73,"2025-2-20","Pending",2025005),
	(15,191.82,"2024-12-25","Completed",2024008);


-- Creating and Inserting data into MenuItems Table

CREATE TABLE MenuItems (
    MenuItemID INT PRIMARY KEY,
    Name VARCHAR(20) NOT NULL,
    Price DOUBLE NOT NULL,
    Category ENUM('Appetizer','Main Course', 'Dessert') NOT NULL,
    StockQuantity TINYINT NOT NULL
);

INSERT INTO MenuItems VALUES 
(1, 'Cheeseburger', 12.99, 'Main Course', 100),
(2, 'Caesar Salad', 8.99, 'Appetizer', 70),
(3, 'Tiramisu', 6.99, 'Dessert', 80),
(4, 'Spaghetti', 14.99, 'Main Course', 100),
(5, 'Garlic Bread', 4.99, 'Appetizer', 70),
(6, 'Chocolate Cake', 5.99, 'Dessert', 80),
(7, 'Grilled Salmon', 18.99, 'Main Course', 100),
(8, 'Caprese Salad', 9.99, 'Appetizer', 70);


-- Creating and Inserting data into the associate table, Orders_has_MenuItems Table

CREATE TABLE Orders_has_MenuItems (
    Orders_OrderID INT,
    Orders_Reservation_ReservationID INT,
    MenuItems_MenuItemID INT,
    Quantity TINYINT NOT NULL,
    PRIMARY KEY (Orders_OrderID, Orders_Reservation_ReservationID, MenuItems_MenuItemID),
    FOREIGN KEY (Orders_OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (Orders_Reservation_ReservationID) REFERENCES Reservations(ReservationID),
    FOREIGN KEY (MenuItems_MenuItemID) REFERENCES MenuItems(MenuItemID)
);

INSERT INTO Orders_has_MenuItems VALUES
(1,2024001,1,3),
(1,2024001,4,1),
(1,2024001,7,1),
(1,2024001,2,2),
(1,2024001,5,3),
(1,2024001,3,2),
(1,2024001,6,3),
(2,2024002,1,5),
(2,2024002,4,5),
(2,2024002,2,5),
(2,2024002,8,5),
(2,2024002,3,5),
(2,2024002,6,5),
(3,2024003,2,3),
(3,2024003,5,2),
(3,2024003,7,5),
(3,2024003,3,2),
(3,2024003,6,3),
(4,2024004,2,6),
(4,2024004,4,6),
(4,2024004,6,6),
(5,2024005,2,1),
(5,2024005,5,3),
(5,2024005,8,1),
(5,2024005,1,5),
(5,2024005,6,5),
(6,2024006,2,8),
(6,2024006,7,8),
(6,2024006,3,8),
(7,2024007,2,2),
(7,2024007,1,1),
(7,2024007,4,1),
(7,2024007,3,1),
(7,2024007,6,1),
(8,2024008,5,6),
(8,2024008,1,6),
(8,2024008,6,6),
(9,2024009,2,2),
(9,2024009,7,2),
(9,2024009,3,2),
(10,2025001,2,2),
(10,2025001,5,2),
(10,2025001,4,4),
(10,2025001,6,4),
(11,2025002,5,2),
(11,2025002,4,2),
(11,2025002,3,2),
(12,2025003,2,12),
(12,2025003,4,12),
(12,2025003,6,12),
(13,2025004,8,2),
(13,2025004,4,2),
(13,2025004,6,2),
(14,2025005,2,9),
(14,2025005,7,9),
(14,2025005,3,9),
(15,2024008,8,6),
(15,2024008,4,6),
(15,2024008,6,6);