import styled from "styled-components";

export const PageHeading = styled.h1`
  min-width: 100%;
  text-align: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ProductCardWrapper = styled.div`
  width: calc(20.33% - 1.25rem);
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 0.5rem 0.75rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    width: calc(25% - 1.25rem);
  }

  @media (max-width: 992px) {
    width: calc(33.33% - 1.25rem);
  }

  @media (max-width: 768px) {
    width: calc(50% - 1.25rem);
  }

  @media (max-width: 576px) {
    width: calc(100% - 1.25rem);
  }
`;

export const ProductCardContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const ProductDetails = styled.div`
  margin-top: 1.25rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
`;

export const ProductPrices = styled.div`
  margin-bottom: 0.625rem;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
`;

export const ProductOriginalPrice = styled.p`
  font-size: 0.875rem;
  text-decoration: line-through;
  color: #888888;
`;

export const ProductDiscountedPrice = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  color: #ff0000;
`;

export const ProductSale = styled.p`
  font-size: 0.875rem;
  color: #888888;
`;

export const ProductLink = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
