import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #f2f2f2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 40rem;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    label {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    input {
      padding: 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
    }

    p {
      color: red;
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }

  button[type="submit"] {
    display: inline-block;
    background-color: rgb(52, 152, 219);
    color: #fff;
    font-size: 1.2rem;
    padding: 1.5rem 2.5rem;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;
