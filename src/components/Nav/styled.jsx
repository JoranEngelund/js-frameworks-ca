import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Ul = styled.ul`
  list-style: none;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

export const Li = styled.li`
  padding: 20px;
`;
