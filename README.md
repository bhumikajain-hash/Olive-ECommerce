# 🌿 Olive-ECommerce

A professional, high-end E-Commerce application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project features a sophisticated aesthetic and a robust architecture for handling authentication, carts, and direct checkouts.

## 🎨 Design System
- **Primary:** `rgb(67,78,50)` (Deep Olive) - Used for authority and grounding.
- **Secondary:** `rgb(222,234,60)` (Muted Lime) - Used for high-conversion CTAs.
- **Background:** `#ECDFCC` (Cream/Sand) - Used for a formal, clean workspace.

## 🚀 Key Features

### 🔐 Advanced Authentication
- **State Hydration:** Synchronizes Redux with `localStorage` on the first millisecond of load to prevent "refresh-to-login" redirects.
- **Protected Routes:** Custom `AuthWrapper` component manages access for Users vs. Admins.

### 🛒 Seamless Shopping
- **Smart "Add to Cart":** Buttons dynamically change to "Go to Cart" if the item is already present in the user's profile.
- **Direct Checkout:** Support for "Buy Now" functionality using URL parameters and query strings (`/checkout/:id?quantity=x`).

### 💳 Professional Checkout
- **Bill Summary:** Real-time calculation of actual price, 10% auto-discount, and COD convenience fees.
- **Validation:** Mandatory payment method selection with visual feedback and disabled-state buttons.

### ⚡ Performance Optimization
- **Code Splitting:** Implemented `React.lazy()` and `Suspense` for all major routes to reduce initial bundle size.
- **Asset Optimization:** Efficient handling of product images and UI transitions.

## 🛠️ Tech Stack
- **Framework:** React + Vite
- **State Management:** Redux Toolkit (Slices & Async Thunks)
- **Routing:** React Router DOM v6 (with Lazy Loading)
- **Forms:** React Hook Form
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Toastify

## 📂 Project Structure
- `/src/store` - Redux logic (actions/reducers)
- `/src/pages` - UI Views (Home, Product, Checkout, Profile)
- `/src/components` - Logic wrappers (AuthWrapper)

## ⚙️ How to Run

1. **Backend Setup**
Navigate to the backend directory to start the JSON server:
` ```bash`
- `cd backend`
- `pnpm start`

2. **Frontend Setup**
Open a new terminal, navigate to the frontend directory, and start the development server:
` ```bash`
- `cd frontend`
- `pnpm dev`