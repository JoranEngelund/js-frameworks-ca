import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

/**
 *
 * @returns App components that returns Layout compoennt and Routing for the App
 */
export default function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/product" element />
        <Route path="/contact" element />
        <Route path="/cart" element />
      </Routes>
    </div>
  );
}
