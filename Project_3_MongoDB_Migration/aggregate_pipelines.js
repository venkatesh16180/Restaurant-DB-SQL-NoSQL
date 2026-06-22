// Pipeline 1: Unwind orders and group by customer
db.customers.aggregate([
    { $unwind: "$reservations.orders" },
    { $group: { _id: "$CustomerID", totalSpent: { $sum: "$reservations.reservations.orders.TotalAmount" } } }
]);

// Pipeline 2: Group by product and count occurrences
db.customers.aggregate([
    { $unwind: "$reservations.orders" },
    { $unwind: "$reservations.orders.menu_items" },
    { $group: { _id: "$reservations.orders.menu_items.Name", count: { $sum: 1 } } }
]);

// Pipeline 3: Filter reservations.orders with total amount greater than 100
db.customers.aggregate([
    { $match: { "reservations.orders.TotalAmount": { $gt: 100 } } },
    { $project: { CustomerID: 1, reservations.orders: 1 } }
]);

// Pipeline 4: Group by customer and push product names into an array
db.customers.aggregate([
    { $unwind: "$reservations.orders" },
    { $unwind: "$reservations.orders.menu_items" },
    { $group: { _id: "$customer_id", menu_items: { $push: "$reservations.orders.menu_items.product_name" } } }
]);

// Pipeline 5: Project with a filter on menu_items array
db.customers.aggregate([
    { $unwind: "$reservations.orders" },
    { $project: { customer_id: 1, menu_items: { $filter: { input: "$reservations.orders.menu_items", as: "product", cond: { $gt: ["$$product.Price", 30] } } } } }
]);