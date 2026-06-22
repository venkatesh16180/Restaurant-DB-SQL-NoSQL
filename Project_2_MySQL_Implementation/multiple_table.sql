-- 1. Write a query involving an associative table and two other related tables. You must use the INNER JOIN to connect with all three tables. 
SELECT o.OrderID, o.OrderDate, mi.Name AS MenuItemName, ohmi.Quantity, o.TotalAmount FROM Orders o
INNER JOIN 
    Orders_has_MenuItems ohmi ON o.OrderID = ohmi.Orders_OrderID
INNER JOIN 
    MenuItems mi ON ohmi.MenuItems_MenuItemID = mi.MenuItemID
WHERE TotalAmount > 100; -- This Query Joins Order, MenuItems and Order_has_MenuItems(associative Table) and then displays all the OrderIDs, OrderDate, Name, Quantity and Total Amount for Orders of Total Amount more than 100
    
-- 2. Write a query including two or more tables and using the LEFT OUTER JOIN.
SELECT c.FirstName, c.LastName, f.Comment FROM Customers AS c
LEFT OUTER JOIN 
    Feedback AS f ON c.CustomerID = f.Customers_CustomerID; -- This query shows all the customers and their comments if they did comment
    
-- 3. Write a query including some kind of set operation. 
SELECT Name, Category FROM MenuItems WHERE Category = 'Appetizer'
UNION 
SELECT Name, Category FROM MenuItems WHERE Category = 'Dessert'; -- Appending/Unioning the Appertizer and Dessert Menu Items

-- 4. Write a query including a subquery and some multi-row operation.
SELECT OrderID, TotalAmount FROM Orders 
WHERE TotalAmount > (SELECT AVG(TotalAmount) FROM Orders); -- This query returns all the orderIDs that spend more than Average Total Amount of all the Orders

-- 5. Write a query including a derived table using the WITH statement.
WITH MenuItemSales AS (
    SELECT mi.MenuItemID, mi.Name, SUM(ohmi.Quantity) AS TotalQuantitySold FROM MenuItems mi
    INNER JOIN 
        Orders_has_MenuItems ohmi ON mi.MenuItemID = ohmi.MenuItems_MenuItemID
    GROUP BY 
        mi.MenuItemID, mi.Name
)
SELECT * FROM MenuItemSales
WHERE TotalQuantitySold > 20; -- This query returns the menuitem names and numbers of times it was sold