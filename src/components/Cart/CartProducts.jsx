import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styledCartProduct";

/**
 * Cart Item component that renders a single item in the cart.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item object.
 * @param {Function} props.handleRemoveFromCart - The function to handle removing the item from the cart.
 * @returns {JSX.Element} JSX representation of the Cart Item component.
 */

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <styled.CartProduct>
      <div>
        <div>
          <h2>{item.title}</h2>
          <div>
            {item.price === item.discountedPrice ? (
              <p>{item.price} ,-</p>
            ) : (
              <>
                <p>{item.discountedPrice} ,-</p>
              </>
            )}
          </div>
        </div>
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <button onClick={() => handleRemoveFromCart(item.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </styled.CartProduct>
  );
};

export default CartItem;
