-- Implement 2 procedures and 1 function or 1 procedure and 2 functions that make use of the data in your database. The 3 routines must be presented in a single sq file named routines.sql.


-- Function to get the total revenue generated for a specific date
DELIMITER $$
CREATE FUNCTION GetTotalRevenueForDate(targetDate DATE) 
RETURNS DOUBLE
READS SQL DATA
BEGIN
    DECLARE totalRevenue DOUBLE DEFAULT 0; -- Initialize totalRevenue

    SELECT SUM(TotalAmount) INTO totalRevenue FROM Orders
    WHERE OrderDate = targetDate;

    RETURN IFNULL(totalRevenue, 0); -- Return 0 if there are no orders on that date
END$$
DELIMITER ;

-- SELECT GetTotalRevenueForDate("2024-3-3"); -- Returns 137.85
-- SELECT GetTotalRevenueForDate("2025-4-17"); -- Returns 0


-- Procedure to add feedback from a customer
DELIMITER $$
CREATE PROCEDURE AddCustomerFeedback (
	IN FeedbackID INT,
    IN rating ENUM('1', '2', '3', '4', '5'),
    IN comment VARCHAR(200),
    IN customerId INT
)
BEGIN
    INSERT INTO Feedback (FeedbackID, Rating, Comment, Customers_CustomerID)
    VALUES (FeedbackID, rating, comment, customerId);
END$$
DELIMITER ;

-- CALL AddCustomerFeedback(13,5,"Great Restuarant!",8); -- Adding a Customer Feedback


-- Procedure to retrieve all reservations for a specific customer
DELIMITER $$
CREATE PROCEDURE GetCustomerReservations (
    IN customerId INT
)
BEGIN
    SELECT r.ReservationID, r.ReservationDate, r.ReservationTime, r.NumberOfGuests FROM Reservations r
    WHERE r.Customers_CustomerID = customerId;
END$$
DELIMITER ;

-- CALL GetCustomerReservations(3); -- getting Customer details by CustomerID