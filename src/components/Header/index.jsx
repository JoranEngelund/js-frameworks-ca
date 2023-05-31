import Logo from "../Logo";
import Nav from "../Nav";
import * as styled from "../Header/styled.jsx";
import Search from "../Search";

/**
 *
 * @returns Header Component that returns <Logo/> <Nav/> and <Search/> component
 */
export default function Header() {
  return (
    <styled.Header>
      <Logo />
      <Nav />
      <Search />
    </styled.Header>
  );
}
