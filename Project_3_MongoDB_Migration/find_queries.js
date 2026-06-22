// Query 1: Find customers with a specific email
db.customers.find(
    { Email: "Jon@example.com" },
    { FirstName: 1,LastName: 1, Email: 1 }
);

// Query 2: Find orders with total amount greater than 150
db.customers.find(
    { "reservations.orders.TotalAmount": { $gt: 150 } },
    { "reservations.orders.OrderID": 1 }
);

// Query 3: Find customers whose names start with 'J'
db.customers.find(
    { FirstName: { $regex: /^J/ } },
    { FirstName: 1, Email: 1 }
);
// Query 4: Find orders that contain a specific product
db.customers.find(
    { "reservations.orders.menu_items.Name": "Caesar Salad" },
    { "reservations.orders.$": 1 }
);

// Query 5: Find customers without any orders if any exists
db.customers.find(
    { reservations.orders: { $nor: [{ $exists: true }] } },
    { FirstName: 1, Email: 1 }
);
