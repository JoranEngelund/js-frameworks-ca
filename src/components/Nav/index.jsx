import * as styled from "../Nav/styled.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @returns Nav component that returns nav element with nested <ul> and <li> elements for navigation
 */
export default function Nav() {
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
          <styled.NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </styled.NavLink>
        </styled.Li>
      </styled.Ul>
    </nav>
  );
}
