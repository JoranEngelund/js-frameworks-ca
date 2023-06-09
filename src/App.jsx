import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import { CartProvider } from "./components/Cart/CartContext";
import CheckoutSuccess from "./components/pages/CheckoutSuccess";
/**
 *
 * @returns App component that returns Layout component and Routing for the App
 */
export default function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<h1>Page not found</h1>} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}
