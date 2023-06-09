import styled from "styled-components";

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #777777;
    text-align: center;
  }

  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    margin-left: 2rem;
    border-radius: 0.5rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
    font-size: 1.5rem;
    color: #000000;
    transition: color 0.3s;

    &:hover {
      color: #ff0000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 1rem;
    }

    img {
      width: 6rem;
      height: 6rem;
      margin: 0;
      margin-bottom: 1rem;
    }

    button {
      font-size: 1.3rem;
    }
  }
`;
