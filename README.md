# 🛒 UsamaCart – React Ecommerce Store

UsamaCart is a fully responsive ecommerce web application built with **React**, **Context API**, and **FakeStoreAPI**. The project focuses on modern UI/UX, state management without Redux, and real-world ecommerce functionality such as product browsing, cart management, and order summary.

---

## 🚀 Live Demo

👉 https://usamacart.vercel.app

---

## ✨ Features

### 🏠 Product Browsing

* Responsive product grid (4 → lg, 3 → md, 2 → sm)
* Category dropdown filter
* Search functionality
* Product cards with image, title, category, rating, and price
* Hover **View More** option to open product modal

### 🧩 Product Modal

* Detailed product information
* Quantity control
* Add to cart from modal

### 🛒 Cart System

* Add / remove products
* Increase or decrease quantity
* Dynamic price calculation
* Order summary with:

  * Total price
  * Shipping fee
  * Tax calculation
  * Proceed to checkout button

### ⚙ State Management

* Built with **useContext** (no Redux)
* Centralized cart logic
* Clean and scalable architecture

### 📱 Responsive Design

* Mobile-first approach
* Optimized grid layout for all devices

---

## 🛠 Tech Stack

* **React.js** – Component based UI
* **React Router** – Client side routing
* **Context API** – Global state management
* **FakeStoreAPI** – Product data
* **CSS / Tailwind – Styling
* **Vercel** – Deployment

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header
│   ├── ProductCard
│   ├── ProductModal
│   ├── ProductCardSkeleton
│   
│
├── store/
│   └── CartContext.jsx
│   └── FilterContext.jsx

│
├── pages/
│   ├── HomePage.jsx
│   └── CartPage.jsx
│
└── App.jsx
```

---

## 🔧 Installation

1. Clone repository

```bash
git clone https://github.com/chusamaikram/UsamaCart
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

---

## 🌐 API Used

This project uses **FakeStoreAPI** for product data:
[https://fakestoreapi.com](https://fakestoreapi.com)

Endpoints used:

* `/products`
* `/products/categories`
* `/products/:id`

---

## 🎯 Next Goals

* ✅ Checkout functionality
* ✅ Theme toggler (Dark/Light mode)
* ⏳ User authentication UI
* ⏳ Persist cart with localStorage
* ⏳ Toast notifications

---

## 💡 What I Learned

* Managing global state with **useContext**
* Building reusable React components
* Handling modals and dynamic UI
* Responsive layouts
* API integration
* Real ecommerce cart logic

---

## 🤝 Contributing

Contributions and suggestions are welcome! Feel free to fork this repository and improve the project.

---

## 📄 License

This project is for learning purposes.

---

### 👨‍💻 Author

**Usama**
Frontend Developer | React Enthusiast
