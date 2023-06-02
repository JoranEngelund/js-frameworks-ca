import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
/**
 *
 * @returns App component that returns Layout compoennt and Routing for the App
 */
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element />
        </Route>
      </Routes>
    </div>
  );
}
