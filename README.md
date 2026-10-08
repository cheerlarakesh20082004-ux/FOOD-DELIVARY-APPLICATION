# 🍔 FoodExpress – Online Food Delivery Application

FoodExpress is a full-stack online food delivery application designed to provide a simple and convenient platform for customers to browse food items, manage their accounts, place orders, and track their food orders.

The project is being developed using **Java Full Stack technologies**, with a React frontend and Java/Spring Boot backend.

---

## 🚀 Features

### 👤 User Features

* User Registration
* User Login
* User Authentication
* User Profile Management
* Browse Food Items
* Search Food Items
* View Food Details
* Add Food to Cart
* Update Cart Quantity
* Remove Items from Cart
* Place Orders
* View Order History
* Order Status Tracking

### 🏪 Restaurant Features

* Restaurant Registration/Login
* Manage Restaurant Profile
* Add Food Items
* Update Food Items
* Delete Food Items
* Manage Orders
* Update Order Status

### 👨‍💼 Admin Features

* Admin Login
* Manage Users
* Manage Restaurants
* Manage Food Items
* Manage Orders
* Monitor Application Data

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* Axios

### Backend

* Java
* Spring Boot
* Spring MVC
* Spring Data JPA
* Spring Security
* REST APIs

### Database

* MySQL

### Development Tools

* Visual Studio Code
* IntelliJ IDEA
* Git
* GitHub
* Postman
* Maven

---

## 📂 Project Structure

```text
FOOD-DELIVARY-APPLICATION/
│
├── foodexpress-frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── api.js
│   ├── package.json
│   └── vite.config.js
│
├── foodexpress-backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   └── pom.xml
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/cheerlarakesh20082004-ux/FOOD-DELIVARY-APPLICATION.git
```

Move into the project directory:

```bash
cd FOOD-DELIVARY-APPLICATION
```

---

## 💻 Frontend Setup

Navigate to the frontend folder:

```bash
cd foodexpress-frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## ☕ Backend Setup

Open the backend project in **IntelliJ IDEA** or your preferred Java IDE.

Make sure you have:

* JDK 21 or later
* Maven
* Spring Boot
* MySQL

Configure your MySQL database in:

```text
application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/foodexpress
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Run the Spring Boot application.

The backend will normally run at:

```text
http://localhost:8080
```

---

## 🔗 Frontend & Backend

The React frontend communicates with the Spring Boot backend using REST APIs.

Example:

```text
React.js
   ↓
Axios
   ↓
REST API
   ↓
Spring Boot
   ↓
Spring Data JPA
   ↓
MySQL
```

---

## 🔐 Authentication

The application is designed to support secure authentication and authorization.

Planned authentication features include:

* User Login
* User Registration
* Password Encryption
* Role-Based Access
* JWT Authentication

Roles:

```text
CUSTOMER
RESTAURANT
ADMIN
```

---

## 📱 Application Pages

### Customer

* Home
* Login
* Registration
* Restaurants
* Food Menu
* Food Details
* Cart
* Checkout
* Orders
* Profile

### Restaurant

* Restaurant Dashboard
* Food Management
* Order Management
* Profile

### Admin

* Admin Dashboard
* User Management
* Restaurant Management
* Food Management
* Order Management

---

## 🔄 Application Flow

```text
User
 │
 ▼
Registration / Login
 │
 ▼
Browse Restaurants
 │
 ▼
Select Food
 │
 ▼
Add to Cart
 │
 ▼
Checkout
 │
 ▼
Place Order
 │
 ▼
Restaurant Receives Order
 │
 ▼
Restaurant Updates Order Status
 │
 ▼
Customer Tracks Order
```

---

## 🧪 Testing

The backend REST APIs can be tested using:

* Postman

Frontend can be tested using:

* Browser Developer Tools
* Manual UI Testing

---

## 🔮 Future Enhancements

Future versions of FoodExpress may include:

* 🤖 AI-based food recommendations
* 📍 Real-time order tracking
* 💳 Online payment integration
* 🔔 Real-time order notifications
* ⭐ Food and restaurant reviews
* 🎁 Coupon and discount system
* 📊 Admin analytics dashboard
* 🗺️ Google Maps integration
* 📱 Mobile application
* ☁️ Cloud deployment
* 🐳 Docker support

---

## 🎯 Project Objective

The main objective of FoodExpress is to develop a real-world **Java Full Stack application** that demonstrates practical knowledge of:

* Java
* Spring Boot
* REST API development
* React.js
* MySQL
* Authentication
* CRUD operations
* Git & GitHub
* Full-stack application architecture

---

## 👨‍💻 Developer

**Cheerla Rakesh**

B.Tech – Electrical & Electronics Engineering

Interested in:

* Java Full Stack Development
* React.js
* Spring Boot
* AI Applications
* Software Development

---

## 📌 Project Status

🚧 **Currently under development**

New features and improvements will be added continuously.

---

## ⭐ If You Like This Project

If you find this project useful or interesting, please consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **educational and portfolio purposes**.
