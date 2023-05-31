import { Link } from "react-router-dom";
import { LogoLink } from "./styled";

/**
 *
 * @returns Link with string
 */
export default function Logo() {
  return <LogoLink to="/">Thrift Shop</LogoLink>;
}
