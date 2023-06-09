import * as styled from "../Nav/styled.jsx";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Cart/CartContext.jsx";

/**
 *
 * @returns Nav component that returns nav element with nested <ul> and <li> elements for navigation
 */
export default function Nav() {
  const { cartSize } = useCart();

  return (
    <nav>
      <styled.Ul>
        <styled.Li>
          <styled.NavLink to="/">Home</styled.NavLink>
        </styled.Li>
        <styled.Li>
          <styled.NavLink to="/contact">Contact</styled.NavLink>
        </styled.Li>
        <styled.Li>
          <styled.NavCartLink to="/cart">
            <styled.CartIcon icon={faShoppingCart} />
            {cartSize > 0 ? (
              <styled.CartCount>{cartSize}</styled.CartCount>
            ) : null}
          </styled.NavCartLink>
        </styled.Li>
      </styled.Ul>
    </nav>
  );
}
