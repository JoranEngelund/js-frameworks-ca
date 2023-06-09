import React, { useEffect } from "react";
import { useCart } from "../../Cart/CartContext";
import CartItemsList from "../../Cart/CartItems";
import { Link } from "react-router-dom";
import * as styled from "./styled";

/**
 * Cart component that renders the cart page.
 *
 * @component
 * @returns {JSX.Element} JSX representation of the Cart component.
 */

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
    }
  }, []);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.discountedPrice || item.price;
    return acc + price;
  }, 0);

  return (
    <styled.CartContainer>
      <h1>Cart</h1>
      <CartItemsList
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      {cartItems.length > 0 && (
        <styled.TotalPrice>
          Total Amount: {totalPrice.toLocaleString()} ,-
        </styled.TotalPrice>
      )}
      {cartItems.length > 0 && (
        <Link to="/checkoutSuccess">
          <styled.CheckoutButton onClick={() => clearCart()}>
            Checkout
          </styled.CheckoutButton>
        </Link>
      )}
    </styled.CartContainer>
  );
};

export default Cart;
