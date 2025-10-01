# 🛍️ Full-Stack E-Commerce Platform

A modern full-stack e-commerce application powered by Strapi (backend CMS) and React (frontend). Designed for flexibility and scalability, the platform supports product catalogs, media handling, and a Redux-driven shopping cart, with secure Stripe payments integrated out of the box. All features are wrapped in a clean, responsive UI, making it a robust template for building real-world online stores.

## 🔍 Key Features

- **⚡ Headless CMS with Strapi**

  A flexible backend powered by Strapi, offering effortless product, category, and media management. Its intuitive admin panel and auto-generated APIs minimize boilerplate code while keeping the system highly customizable.

- **💻 React Frontend with Redux**

  A fast and responsive interface built with React, enhanced by Redux for centralized state management. This ensures smooth product browsing, reliable cart handling, and a consistent checkout experience.

- **💳 Secure Payments with Stripe**

  Integrated with the Stripe API to deliver secure and reliable checkout. Supports modern payment flows and can be extended to handle subscriptions or multi-currency transactions with ease.

- **🔗 Data Fetching with Axios**

  The frontend communicates with the backend using Axios, enabling efficient requests, robust error handling, and seamless integration with custom React hooks for streamlined data flow.

- **🎨 Clean & Responsive UI**
  A modern user experience designed with SCSS modules and reusable React components. The interface is fully responsive, ensuring a polished shopping experience across desktop and mobile devices.

## 📁 Project Structure

```bash
e-commerce-app/
├── api/                        # Backend (Strapi CMS)
│   ├── config/                 # Strapi configuration (admin, database, server, middlewares, plugins)
│   ├── database/               # DB migrations
│   ├── images/                 # Product image assets
│   ├── public/                 # Static files & uploads (user-uploaded product images)
│   ├── package.json            # Backend dependencies & scripts
│   └── ...                     # Other backend modules and logic
│
├── client/                     # Frontend (React app)
│   ├── public/                 # Static assets (index.html, images, icons)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page-level views (Home, Product, Cart, etc.)
│   │   ├── redux/              # Redux store & reducers (e.g., cartReducer)
│   │   ├── hooks/              # Custom hooks (e.g., useFetch for Axios requests)
│   │   ├── App.js              # Root component
│   │   ├── index.js            # React entry point
│   │   ├── app.scss            # Global styles
│   │   └── makeRequest.js      # Axios instance for API requests
│   └── package.json            # Frontend dependencies & scripts
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
└── README.md                   # Project documentation
```

## 🛠 Tech Stack

- **Backend / CMS**: `Strapi (Node.js)`
- **Frontend**: `React`, `Redux`, `Node.js`, `React Router`
- **UI & Visualization**: `Material UI`, `SCSS`
- **API & Data**: `Axios` (data fetching & custom hooks)
- **Payments**: `Stripe` (secure checkout)

## ⚙️ Dependencies

- **Node.js** – Required for running Strapi backend and React frontend
   👉 [Download Node.js](https://nodejs.org/en/download)

- **MySQL** – Database for storing products, users, and orders
   👉 [Download MySQL](https://dev.mysql.com/downloads)

- **Yarn** – Package manager (alternative to npm)

  ```bash
  npm install -g yarn
  ```

## 🚀 Setup & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/HenryyyLI/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   yarn install
   
   # Install backend dependencies
   cd api
   yarn install
   
   # Install frontend dependencies
   cd client
   yarn install
   ```

3. **Start backend & frontend**

   ```bash
   yarn dev
   ```
