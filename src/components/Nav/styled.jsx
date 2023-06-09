import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  position: relative;
  font-size: 1.5rem;
`;

export const CartCount = styled.p`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: red;
  color: white;
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
`;

export const NavCartLink = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
`;
