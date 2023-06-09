import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Loader = styled.div`
  width: 4rem;
  height: 4rem;
  border: 0.4rem solid #f3f3f3;
  border-top: 0.4rem solid rgb(0, 51, 102);
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
