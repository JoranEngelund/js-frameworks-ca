import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  a {
    background-color: #3498db;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    color: white;
    text-decoration: none;
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  svg {
    font-size: 3rem;
    color: #2ecc71;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }

    svg {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }

    a {
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0.6rem 1rem;
    }
  }
`;
