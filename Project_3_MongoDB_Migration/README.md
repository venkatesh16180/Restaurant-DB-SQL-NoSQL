# Project 3 — MongoDB NoSQL Migration
**Course: INFO 579 | University of Arizona**

## 📌 Objective
Migrate the Restaurant Management System from a relational MySQL database
to MongoDB — redesigning the schema as a document model and implementing
find queries and aggregation pipelines.

## 🔑 Key Design Decision
**Denormalized the relational model** into a single `customers` collection
where each document embeds the customer's membership, feedback, reservations,
tables, orders, and menu items — demonstrating a NoSQL document-oriented
approach optimized for read performance.

### Relational → Document Mapping
| MySQL Tables | MongoDB Structure |
|---|---|
| Customers + Membership + Feedback | Top-level customer document |
| Reservations + Tables | Embedded `reservations` array |
| Orders + Order_MenuItems + Menu_Items | Embedded `orders` → `menu_items` |

## 🔑 Key Deliverables
- Designed aggregate boundary collapsing 6+ MySQL tables into 1 collection
- Created `customers` collection with 11 documents (5 shown in excerpt)
- Implemented **find queries** for filtering and projection
- Built **aggregation pipelines** for revenue analysis, group operations,
  and data transformation

## 📁 Files
| File | Description |
|---|---|
| `collection_creation.js` | Creates and populates the customers collection |
| `find_queries.js` | MongoDB find operations with filters and projections |
| `aggregate_pipelines.js` | Aggregation pipelines for analytics |
| `collection.json` | Collection data in JSON format |

## 🛠️ Tools
`MongoDB` `mongosh` `JavaScript` `Aggregation Framework`

## 🚀 How to Run
```javascript
// In mongosh, run in order:
load("collection_creation.js")
load("find_queries.js")
load("aggregate_pipelines.js")
```
