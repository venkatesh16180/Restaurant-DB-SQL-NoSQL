# Restaurant Management System — SQL & NoSQL
**Course: SQL/NoSQL Databases (INFO 579) | University of Arizona**

---

## 📌 Overview
A complete end-to-end database solution for a Restaurant Management System,
built across three phases — requirements analysis and data modeling, full
MySQL relational implementation, and migration to MongoDB NoSQL. The system
manages customers, reservations, orders, menu items, memberships, tables,
and customer feedback.

---

## 📁 Repository Structure
```
Restaurant-DB-SQL-NoSQL/
│
├── Project_1_Database_Design/      # ER modeling & requirements analysis
├── Project_2_MySQL_Implementation/ # Full relational DB implementation
├── Project_3_MongoDB_Migration/    # NoSQL migration & aggregation
└── README.md
```

---

## 🗄️ System Overview

### Entities & Relationships
| Entity | Key Attributes |
|---|---|
| Customers | CustomerID, Name, Phone, Email |
| Membership | MembershipID, Type (Gold/Silver/Bronze), Dates |
| Tables | TableID, TableNumber, Capacity |
| Reservations | ReservationID, Date, Time, Guests — linked to Customer & Table |
| Orders | OrderID, TotalAmount, Status — linked to Reservation |
| Menu Items | MenuItemID, Name, Price, Category, Stock |
| Feedback | FeedbackID, Rating, Comment — linked to Customer |

### Key Design Decisions
- Many-to-many relationship between Orders and Menu Items resolved via
  associative entity
- Membership typed as ENUM (Gold/Silver/Bronze) for data integrity
- MongoDB migration denormalized 3+ related tables into a single
  `customers` collection for efficient document retrieval

---

## 🔑 Key Highlights
- Designed full Conceptual Data Model using **Crow's Foot notation**
- Implemented normalized MySQL schema with **15+ attributes** across
  **6 entities**
- Built **2 stored procedures** and **1 user-defined function**:
  - `GetTotalRevenueForDate()` — calculates daily revenue
  - `AddCustomerFeedback()` — inserts customer feedback
  - `GetCustomerReservations()` — retrieves all reservations per customer
- Migrated full relational schema to **MongoDB** with aggregation
  pipelines demonstrating SQL-to-NoSQL portability

---

## 🛠️ Tools & Technologies
| Category | Tools |
|---|---|
| Relational DB | MySQL, MySQL Workbench |
| NoSQL DB | MongoDB |
| Query Types | Single-table, Multi-table JOINs, CTEs, Stored Procedures, Functions |
| MongoDB | insertMany, find queries, aggregation pipelines |
| Data Modeling | Crow's Foot ER notation, Conceptual & Physical Data Models |

---

## 🚀 How to Run

### MySQL (Projects 1 & 2)
1. Install MySQL and MySQL Workbench
2. Run scripts in this order:
```sql
source Project_2_MySQL_Implementation/database_implementation.sql;
source Project_2_MySQL_Implementation/single_table.sql;
source Project_2_MySQL_Implementation/multiple_table.sql;
source Project_2_MySQL_Implementation/routines.sql;
```

### MongoDB (Project 3)
1. Install MongoDB and start mongosh
2. Run scripts in this order:
```javascript
load("Project_3_MongoDB_Migration/collection_creation.js")
load("Project_3_MongoDB_Migration/find_queries.js")
load("Project_3_MongoDB_Migration/aggregate_pipelines.js")
```

---

## 👤 Author
**Venkateshwara Chowdary Tallapaneni**
MS Information Sciences (Machine Learning) | University of Arizona
[LinkedIn](https://www.linkedin.com/in/venkateshwara-chowdary-tallapaneni) |
[GitHub](https://github.com/venkatesh16180)
