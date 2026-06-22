# Project 2 — MySQL Database Implementation
**Course: INFO 579 | University of Arizona**

## 📌 Objective
Implement the Restaurant Management System physical data model in MySQL —
creating all tables, inserting sample data, writing SQL queries, and
building stored routines to automate data operations.

## 🔑 Key Deliverables

### Database Implementation
- Created 6 normalized tables: `Customers`, `Membership`, `Tables`,
  `Reservations`, `Orders`, `Menu_Items`, `Feedback`, `Order_MenuItems`
- Resolved many-to-many relationship between Orders and Menu Items
  using an associative entity (`Order_MenuItems`)
- Inserted 11 customer records with complete relational data

### SQL Queries
- **Single-table:** SELECT, WHERE, GROUP BY, ORDER BY, aggregate functions
- **Multi-table:** INNER JOIN, LEFT JOIN, subqueries across 3+ tables

### Stored Routines
| Routine | Type | Description |
|---|---|---|
| `GetTotalRevenueForDate(date)` | Function | Returns total revenue for a given date |
| `AddCustomerFeedback()` | Procedure | Inserts a new feedback record |
| `GetCustomerReservations(id)` | Procedure | Returns all reservations for a customer |

## 📁 Files
| File | Description |
|---|---|
| `database_implementation.sql` | Table creation + data insertion |
| `single_table.sql` | Single-table query operations |
| `multiple_table.sql` | Multi-table JOIN queries |
| `routines.sql` | Stored procedures and user-defined function |

## 🛠️ Tools
`MySQL` `MySQL Workbench` `SQL`

## 🚀 How to Run
```sql
-- Run in order:
source database_implementation.sql;
source single_table.sql;
source multiple_table.sql;
source routines.sql;
```
