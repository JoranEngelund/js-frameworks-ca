import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
