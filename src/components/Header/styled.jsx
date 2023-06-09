import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1020;
  background-color: rgb(0, 51, 102);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
`;
