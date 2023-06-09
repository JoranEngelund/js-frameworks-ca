import * as styled from "../Footer/styled.jsx";

/**
 *
 * @returns Footer component that returns footer element, with nested anchor element
 */
export default function Footer() {
  return (
    <styled.Footer>
      <styled.Anchor href="https://joranengelund.github.io/">
        Copyright © 2023 Jøran Engelund
      </styled.Anchor>
    </styled.Footer>
  );
}
