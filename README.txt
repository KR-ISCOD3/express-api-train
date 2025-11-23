====================================================
 EXPRESS API WITH CRUD (Node.js + Express)
====================================================

This project is a simple REST API built with Express.js. 
It includes:
- CRUD routes for products
- Middleware
- Route controllers
- Clean folder structure
- Ready to extend with Swagger or MongoDB

----------------------------------------------------
 Project Structure
----------------------------------------------------

small-api/
│── server.js
│── .gitignore
│── README.txt
│── routes/
│     └── productRoutes.js
│── controllers/
│     └── productController.js
│── middleware/
      └── logger.js

----------------------------------------------------
 Installation
----------------------------------------------------

1. Install dependencies:
   npm install

2. Start the server:
   node server.js

3. Server runs at:
   http://localhost:3000

----------------------------------------------------
 API Endpoints
----------------------------------------------------

GET     /api/products          - Get all products
GET     /api/products/:id      - Get product by ID
POST    /api/products          - Create product
PUT     /api/products/:id      - Update product
DELETE  /api/products/:id      - Delete product

----------------------------------------------------
 Notes
----------------------------------------------------

- This project uses an in-memory data array (no database).
- Perfect for beginners learning Express.js.
- Can easily add Swagger, MongoDB, or file uploads.

====================================================
