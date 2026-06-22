// Create the CustomerOrders collection and insert documents

// Drop the collection if it already exists
db.customers.drop();

// Insert documents into the CustomerOrders collection
db.customers.insertMany([
  {
    "CustomerID": "1",
    "FirstName": "John",
    "LastName": "Doe",
    "PhoneNo": "555-123-4567",
    "Email": "john.doe@example.com",
    "membership": {
      "MembershipID": "20250120001",
      "MembershipType": "Gold",
      "StartDate": "2025-01-20",
      "ExpirationDate": "2026-01-19"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2025002",
        "ReservationDate": "2024-04-20",
        "ReservationTime": "15:30",
        "NumberofGuests": 10,
        "Table": {
          "TableID": "202402",
          "TableNumber": 2,
          "Capacity": 12
        },
        "orders": [
          {
            "OrderID": "2",
            "TotalAmount": 299.7,
            "OrderDate": "2024-04-20",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 5
              },
              {
                "MenuItemID": 3,
                "Name": "Tiramisu",
                "Price": 6.99,
                "Category": "Dessert",
                "Quantity": 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "2",
    "FirstName": "Jane",
    "LastName": "Doe",
    "PhoneNo": "520-123-4567",
    "Email": "jane.doe@example.com",
    "membership": {
      "MembershipID": "20250220002",
      "MembershipType": "Silver",
      "StartDate": "2025-02-20",
      "ExpirationDate": "2026-02-19"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2025005",
        "ReservationDate": "2025-02-20",
        "ReservationTime": "11:00",
        "NumberofGuests": 9,
        "Table": {
          "TableID": "202405",
          "TableNumber": 5,
          "Capacity": 9
        },
        "orders": [
          {
            "OrderID": "14",
            "TotalAmount": 314.73,
            "OrderDate": "2025-02-20",
            "Status": "Pending",
            "menu_items": []
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "3",
    "FirstName": "John",
    "LastName": "",
    "PhoneNo": "904-123-4567",
    "Email": "Jon@example.com",
    "membership": {
      "MembershipID": "20250124003",
      "MembershipType": "Silver",
      "StartDate": "2025-01-01",
      "ExpirationDate": "2025-12-31"
    },
    "feedback": [
      {
        "FeedbackID": 5,
        "Rating": 2,
        "Comment": "good food. Everything else could use some improvement."
      }
    ],
    "reservations": [
      {
        "ReservationID": "2025001",
        "ReservationDate": "2025-01-01",
        "ReservationTime": "19:00",
        "NumberofGuests": 4,
        "Table": {
          "TableID": "202507",
          "TableNumber": 7,
          "Capacity": 4
        },
        "orders": [
          {
            "OrderID": "10",
            "TotalAmount": 111.88,
            "OrderDate": "2025-01-01",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 5,
                "Name": "Garlic Bread",
                "Price": 4.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 4,
                "Name": "Spaghetti",
                "Price": 14.99,
                "Category": "Main Course",
                "Quantity": 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "4",
    "FirstName": "Michael",
    "LastName": "",
    "PhoneNo": "555-345-6789",
    "Email": "",
    "membership": {
      "MembershipID": "20250214004",
      "MembershipType": "Gold",
      "StartDate": "2025-02-14",
      "ExpirationDate": "2026-02-13"
    },
 "feedback": [
      {
        "FeedbackID": 2,
        "Rating": 3,
        "Comment": "Love the food but late service."
      },
      {
        "FeedbackID": 3,
        "Rating": 4,
        "Comment": "Love the food but lack of options in the appetizers."
      }
    ],
    "reservations": [
      {
        "ReservationID": "2025004",
        "ReservationDate": "2025-02-14",
        "ReservationTime": "20:00",
        "NumberofGuests": 2,
        "Table": {
          "TableID": "202503",
          "TableNumber": 4,
          "Capacity": 7
        },
        "orders": [
          {
            "OrderID": "13",
            "TotalAmount": 61.94,
            "OrderDate": "2025-02-14",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 8,
                "Name": "Caprese Salad",
                "Price": 9.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 4,
                "Name": "Spaghetti",
                "Price": 14.99,
                "Category": "Main Course",
                "Quantity": 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "5",
    "FirstName": "Sarah",
    "LastName": "Johnson",
    "PhoneNo": "555-456-7890",
    "Email": "sarah.johnson@example.com",
    "membership": {
      "MembershipID": "20240420005",
      "MembershipType": "Bronze",
      "StartDate": "2024-04-20",
      "ExpirationDate": "2025-04-19"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2024002",
        "ReservationDate": "2024-04-20",
        "ReservationTime": "15:30",
        "NumberofGuests": 10,
        "Table": {
          "TableID": "202402",
          "TableNumber": 2,
          "Capacity": 12
        },
        "orders": [
          {
            "OrderID": "2",
            "TotalAmount": 299.7,
            "OrderDate": "2024-04-20",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 5
              },
              {
                "MenuItemID": 3,
                "Name": "Tiramisu",
                "Price": 6.99,
                "Category": "Dessert",
                "Quantity": 5
              }
            ]
          }
        ]
      },
	{
        "ReservationID": "2024005",
        "ReservationDate": "2024-11-25",
        "ReservationTime": "18:00",
        "NumberofGuests": 5,
        "Table": {
          "TableID": "202402",
          "TableNumber": 2,
          "Capacity": 12
        },
        "orders": [
          {
            "OrderID": "5",
            "TotalAmount": 128.85,
            "OrderDate": "2024-11-25",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 5,
                "Name": "Garlic Bread",
                "Price": 4.99,
                "Category": "Appetizer",
                "Quantity": 3
              },
              {
                "MenuItemID": 8,
                "Name": "Caprese Salad",
                "Price": 8.99,
                "Category": "Dessert",
                "Quantity": 1
              },
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Dessert",
                "Quantity": 5
              },
              {
                "MenuItemID": 6,
                "Name": "Chocolate Cake",
                "Price": 5.99,
                "Category": "Dessert",
                "Quantity": 5
              }
		
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "6",
    "FirstName": "Jessica",
    "LastName": "",
    "PhoneNo": "555-567-8901",
    "Email": "jess@example.com",
    "membership": {
      "MembershipID": "20250217006",
      "MembershipType": "Bronze",
      "StartDate": "2025-02-17",
      "ExpirationDate": "2026-02-16"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2025003",
        "ReservationDate": "2025-01-26",
        "ReservationTime": "17:00",
        "NumberofGuests": 12,
        "Table": {
          "TableID": "202402",
          "TableNumber": 2,
          "Capacity": 12
        },
        "orders": [
          {
            "OrderID": "12",
            "TotalAmount": 359.64,
            "OrderDate": "2025-01-26",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 2
              },
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 4,
                "Name": "Spaghetti",
                "Price": 14.99,
                "Category": "Main Course",
                "Quantity": 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "7",
    "FirstName": "David",
    "LastName": "Brown",
    "PhoneNo": "555-678-9012",
    "Email": "david.brown@example.com",
    "membership": {
      "MembershipID": "20240303007",
      "MembershipType": "Silver",
      "StartDate": "2024-03-03",
      "ExpirationDate": "2025-03-02"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2024001",
        "ReservationDate": "2024-03-03",
        "ReservationTime": "17:00",
        "NumberofGuests": 5,
        "Table": {
          "TableID": "202401",
          "TableNumber": 1,
          "Capacity": 5
        },
        "orders": [
          {
            "OrderID": "1",
            "TotalAmount": 137.85,
            "OrderDate": "2024-03-03",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 3
              },
              {
                "MenuItemID": 4,
                "Name": "Spaghetti",
                "Price": 14.99,
                "Category": "Main Course",
                "Quantity": 1
              }
            ]
          }
        ]
      },
	{
        "ReservationID": "2024008",
        "ReservationDate": "2024-12-25",
        "ReservationTime": "19:00",
        "NumberofGuests": 4,
        "Table": {
          "TableID": "202406",
          "TableNumber": 6,
          "Capacity": 6
        },
        "orders": [
          {
            "OrderID": "8",
            "TotalAmount": 143.28,
            "OrderDate": "2024-12-25",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 5,
                "Name": "Garlic Bread",
                "Price": 4.99,
                "Category": "Appetizer",
                "Quantity": 6
              },
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 6
              },
              {
                "MenuItemID": 6,
                "Name": "Chocolate Cake",
                "Price": 5.99,
                "Category": "Dessert",
                "Quantity": 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "8",
    "FirstName": "Laura",
    "LastName": "",
    "PhoneNo": "555-789-0123",
    "Email": "",
    "membership": {
      "MembershipID": "20241023008",
      "MembershipType": "Gold",
      "StartDate": "2024-10-23",
      "ExpirationDate": "2025-10-22"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2024003",
        "ReservationDate": "2024-10-23",
        "ReservationTime": "18:00",
        "NumberofGuests": 5,
        "Table": {
          "TableID": "202504",
          "TableNumber": 4,
          "Capacity": 7
        },
        "orders": [
          {
            "OrderID": "3",
            "TotalAmount": 163.85,
            "OrderDate": "2024-10-23",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 3
              },
              {
                "MenuItemID": 5,
                "Name": "Garlic Bread",
                "Price": 4.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 7,
                "Name": "Grilled Salmon",
                "Price": 18.99,
                "Category": "Main Course",
                "Quantity": 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "9",
    "FirstName": "Daniel",
    "LastName": "White",
    "PhoneNo": "555-890-1234",
    "Email": "daniel.white@example.com",
    "membership": {
      "MembershipID": "20241123009",
      "MembershipType": "Gold",
      "StartDate": "2024-11-23",
      "ExpirationDate": "2025-11-22"
    },
    "feedback": [
      {
        "FeedbackID": 6,
        "Rating": 5,
        "Comment": ""
      }
    ],
    "reservations": [
      {
        "ReservationID": "2024004",
        "ReservationDate": "2024-11-23",
        "ReservationTime": "19:30",
        "NumberofGuests": 6,
        "Table": {
          "TableID": "202504",
          "TableNumber": 4,
          "Capacity": 7
        },
        "orders": [
          {
            "OrderID": "4",
            "TotalAmount": 179.82,
            "OrderDate": "2024-11-23",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
 "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 2
              },
              {
                "MenuItemID": 3,
                "Name": "Tiramisu",
                "Price": 6.99,
                "Category": "Dessert",
                "Quantity": 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "10",
    "FirstName": "Sophia",
    "LastName": "",
    "PhoneNo": "555-901-2345",
    "Email": "Sophia@example.com",
    "membership": {
      "MembershipID": "20240715010",
      "MembershipType": "Gold",
      "StartDate": "2024-07-15",
      "ExpirationDate": "2025-07-14"
    },
    "feedback": [],
    "reservations": [
      {
        "ReservationID": "2024006",
        "ReservationDate": "2024-11-29",
        "ReservationTime": "18:30",
        "NumberofGuests": 8,
        "Table": {
          "TableID": "202405",
          "TableNumber": 5,
          "Capacity": 9
        },
        "orders": [
          {
            "OrderID": "6",
            "TotalAmount": 279.76,
            "OrderDate": "2024-11-29",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 1,
                "Name": "Cheeseburger",
                "Price": 12.99,
                "Category": "Main Course",
                "Quantity": 3
              },
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 4,
                "Name": "Spaghetti",
                "Price": 14.99,
                "Category": "Main Course",
                "Quantity": 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "CustomerID": "11",
    "FirstName": "Maria",
    "LastName": "Copp",
    "PhoneNo": "520-123-4567",
    "Email": "maria.copp@example.com",
    "membership": {
      "MembershipID": "20240417011",
      "MembershipType": "Silver",
      "StartDate": "2024-04-17",
      "ExpirationDate": "2025-04-16"
    },
    "feedback": [
      {
        "FeedbackID": 4,
        "Rating": 5,
        "Comment": "I love the restaurant's ambiance. Food and Staff were great. The staff were a bit late due to the huge crowd but that’s understandable due to the great food that this restaurant provides."
      }
    ],
    "reservations": [
      {
        "ReservationID": "2024007",
        "ReservationDate": "2024-12-25",
        "ReservationTime": "19:00",
        "NumberofGuests": 2,
        "Table": {
          "TableID": "202503",
          "TableNumber": 3,
          "Capacity": 2
        },
        "orders": [
          {
            "OrderID": "7",
            "TotalAmount": 58.94,
            "OrderDate": "2024-12-25",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 1
              },
              {
                "MenuItemID": 3,
                "Name": "Tiramisu",
                "Price": 6.99,
                "Category": "Dessert",
                "Quantity": 1
              }
            ]
          }
        ]
      },
	{
        "ReservationID": "2024009",
        "ReservationDate": "2024-12-26",
        "ReservationTime": "20:00",
        "NumberofGuests": 2,
        "Table": {
          "TableID": "202503",
          "TableNumber": 3,
          "Capacity": 2
        },
        "orders": [
          {
            "OrderID": "9",
            "TotalAmount": 69.94,
            "OrderDate": "2024-12-26",
            "Status": "Completed",
            "menu_items": [
              {
                "MenuItemID": 2,
                "Name": "Caesar Salad",
                "Price": 8.99,
                "Category": "Appetizer",
                "Quantity": 2
              },
              {
                "MenuItemID": 7,
                "Name": "Grilled Salmon",
                "Price": 18.99,
                "Category": "Main Course",
                "Quantity": 2
              },
              {
                "MenuItemID": 3,
                "Name": "Tiramisu",
                "Price": 6.99,
                "Category": "Dessert",
                "Quantity": 2
              }
            ]
          }
        ]
      }
    ]
  }
]
);
