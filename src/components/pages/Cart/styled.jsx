import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CheckoutButton = styled.button`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export const TotalPrice = styled.h3`
  border-bottom: 1px solid grey;
`;
