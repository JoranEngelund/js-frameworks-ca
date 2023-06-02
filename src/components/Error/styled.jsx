import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ErrorButton = styled.button`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background-color: rgb(0, 51, 102);
  border: none;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  padding: 0.625rem 1.25rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;
