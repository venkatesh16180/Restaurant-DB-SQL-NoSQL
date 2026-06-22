use restaurant;
-- 1. Write queries to retrieve data from each non-associative table individually.  
	-- a. At least one of the queries must use single row functions. 
	-- b. At least one of the queries must use aggregate functions. 
	-- c. At least one of the queries must sort the results according to some criteria. 
	-- d. At least one of the queries must return just the first N results. 
	-- e. At least one of the queries must use a selection control function. 

-- Customers Table
-- a
SELECT CustomerID, UPPER(FirstName) AS Uppercase_FirstName, LastName FROM Customers;

-- b
SELECT COUNT(*) AS Total_Customers FROM Customers;

-- c
SELECT CustomerID, FirstName, LastName FROM Customers ORDER BY LastName ASC;

-- d
SELECT CustomerID, FirstName, LastName FROM Customers LIMIT 5;

-- e
SELECT CustomerID, FirstName, LastName FROM Customers WHERE PhoneNo IS NOT NULL;

-- Membership Table
-- a
SELECT MembershipID, MembershipType, DATEDIFF(ExpirationDate, CURDATE()) AS Days_To_Expire FROM Membership;

-- b
SELECT MembershipType, COUNT(*) AS Count_Per_Type FROM Membership GROUP BY MembershipType;

-- c
SELECT MembershipID, MembershipType FROM Membership ORDER BY MembershipID DESC;

-- d
SELECT MembershipID, MembershipType FROM Membership LIMIT 3;

-- e
SELECT MembershipID, MembershipType FROM Membership WHERE ExpirationDate < CURDATE();

-- Feedback Table
-- a
SELECT FeedbackID, LENGTH(Comment) AS Comment_Length FROM Feedback;

-- b
SELECT Rating, COUNT(*) AS Feedback_Count FROM Feedback GROUP BY Rating;

-- c
SELECT FeedbackID, Rating FROM Feedback ORDER BY Rating DESC;

-- d
SELECT FeedbackID, Rating, Comment FROM Feedback LIMIT 10;

-- e
SELECT FeedbackID, Rating, Comment FROM Feedback WHERE Rating IS NOT NULL;

-- MenuItems Table
-- a
SELECT MenuItemID, Name, ROUND(Price, 2) AS Rounded_Price FROM MenuItems;

-- b
SELECT Category, AVG(Price) AS Average_Price FROM MenuItems GROUP BY Category;

-- c
SELECT MenuItemID, Name, Price FROM MenuItems ORDER BY Price ASC;

-- d
SELECT MenuItemID, Name FROM MenuItems LIMIT 5;

-- e
SELECT MenuItemID, Name, Price FROM MenuItems WHERE StockQuantity > 0;

-- Orders Table
-- a
SELECT OrderID, DATE(OrderDate) AS OrderOnlyDate FROM Orders;

-- b
SELECT SUM(TotalAmount) AS TotalSales FROM Orders WHERE Status = 'Completed';

-- c
SELECT * FROM Orders ORDER BY TotalAmount DESC;

-- d
SELECT * FROM Orders LIMIT 10;

-- e
SELECT * FROM Orders WHERE Status IN ('Pending');

-- Reservations
-- a
SELECT ReservationID, DATEDIFF(CURDATE(), ReservationDate) AS DaysSinceReservation FROM Reservations;

-- b
SELECT COUNT(*) AS TotalReservations FROM Reservations;

-- c
SELECT * FROM Reservations ORDER BY ReservationDate ASC;

-- d
SELECT * FROM Reservations LIMIT 6;

-- e
SELECT * FROM Reservations WHERE NumberOfGuests > 4;

-- Tables Table
-- a
SELECT TableID, CONCAT('Table Number: ', TableNumber) AS TableNumberDisplay FROM Tables;

-- b
SELECT COUNT(*) AS TotalTables FROM Tables;

-- c
SELECT * FROM Tables ORDER BY Capacity DESC;

-- d
SELECT * FROM Tables LIMIT 4;

-- e
SELECT * FROM Tables WHERE Capacity >= 6;