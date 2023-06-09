import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as styled from "./styled";

/**
 * CheckoutSuccess component that renders a success message after a successful checkout
 *
 * @component
 * @returns {JSX.Element} JSX representation of the CheckoutSuccess component.
 */

export default function CheckoutSuccess() {
  return (
    <styled.Container>
      <FontAwesomeIcon icon={faCheckCircle} />
      <h1>Checkout Success</h1>
      <div>
        <p>Thank you for ordering products from us</p>
        <p>You will receive an order confirmation per email</p>
        <p>Return to the homepage to continue browsing our products</p>
      </div>
      <Link to="/">Take me home</Link>
    </styled.Container>
  );
}
