import CartItem from "./CartProducts";
import { Link } from "react-router-dom";
import * as styled from "../pages/Cart/styled";

/**
 * Cart Items List component that renders the list of cart items.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.cartItems - The array of cart items.
 * @param {Function} props.handleRemoveFromCart - The function to handle removing an item from the cart.
 * @returns {JSX.Element} JSX representation of the Cart Items List component.
 */

const CartItemsList = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div>
      {cartItems && cartItems.length === 0 ? (
        <styled.CartContainer>
          <h2>Your cart is empty.</h2>
          <Link to="/">
            <styled.CheckoutButton>Go Shopping</styled.CheckoutButton>
          </Link>
        </styled.CartContainer>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={`${item.id}-${index}`}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CartItemsList;
