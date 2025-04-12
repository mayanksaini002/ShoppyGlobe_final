ShoppyGlobe 🛒

ShoppyGlobe is a full-stack e-commerce application built using **React.js (frontend)** and **Node.js, Express.js, MongoDB (backend)**  .  It supports user registration/login, product browsing, cart management, and checkout simulation.

- - -


##  Features

### FRONTEND (React + Redux)
- User Registration and Login (with JWT token support)
- Protected Routes for Cart and Checkout
- Fetch & display products from backend API
- Add to cart / remove from cart / update quantity
- Dynamic total calculation in cart
- Proceed to checkout page with confirmation
- Shows product details on clicking any product
- Responsive design and beautiful UI (custom CSS)

---

###  BACKEND (Node.js + Express + MongoDB)
- RESTful APIs:
  - `GET /products` → fetch all products
  - `GET /products/:id` → fetch product by ID
  - `POST /products` → create a product (temporary/admin only)
  - `PUT /products/:id` → update a product
  - `DELETE /products/:id` → delete a product
  - `POST /api/auth/register` → register new user
  - `POST /api/auth/login` → authenticate user and return token
  - `GET /cart` → fetch cart (protected)
  - `POST /cart` → add to cart (protected)
  - `PUT /cart/:id` → update item quantity (protected)
  - `DELETE /cart/:id` → remove item (protected)

- MongoDB Collections:
  - Users
  - Products
  - Cart (linked to user)

- JWT Authentication:
  - Token returned after login
  - Required in Authorization Header (`Bearer <token>`) for cart routes

---

##  API Testing (ThunderClient)

1. Register:
   - POST `/api/auth/register`
   - JSON body: `{ "name": "John", "email": "john@example.com", "password": "test123" }`

2. Login:
   - POST `/api/auth/login`
   - Get token from response

3. Cart Routes (with token in Authorization → Bearer Token):
   - GET `/cart`
   - POST `/cart` → add item
   - PUT `/cart/:id` → update quantity
   - DELETE `/cart/:id` → remove item

4. Products:
   - GET `/products` → view all
   - POST `/products` → add (admin)
   - PUT `/products/:id` → update (admin)
   - DELETE `/products/:id` → delete (admin)

5. MongoDB:
   - Use MongoDB Compass to view `products`, `users`, `carts` collections

---

##  Checkout Page Logic

- Checkout shows:
  - ✅ Selected product(s) from cart
  - ✅ Final price
  - ✅ Styled confirmation message
  - ✅ Continue shopping button
- If no items in cart: shows "Checkout is empty"

---

## 🔐 Authentication Flow

- New users register via `/api/auth/register`
- After registration, redirected to `/api/auth/login`
- After login, token is stored in Redux and used to access protected cart and checkout routes

---

##  Folder Breakdown

### Frontend:
- `src/pages/Register.jsx` → register UI + redirect to login
- `src/pages/Login.jsx` → login with token generation
- `src/components/ProductItem.jsx` → displays product cards
- `src/pages/Cart.jsx` → manages cart items, updates, delete, checkout
- `src/pages/Checkout.jsx` → shows dynamic checkout page

### Backend:
- `routes/` → all API routes (`products`, `auth`, `cart`)
- `controllers/` → product and cart logic (optional)
- `models/` → Mongoose schemas: `User`, `Product`, `Cart`
- `middlewares/` → error handling and auth token validation
- `server.js` → Express server

---

