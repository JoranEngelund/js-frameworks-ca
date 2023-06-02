import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
