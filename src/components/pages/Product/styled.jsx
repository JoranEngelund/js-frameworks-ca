import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #f2f2f2;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProductImage = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
`;

export const Rating = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ProductName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrices = styled.div`
  margin-bottom: 1rem;
`;

export const RegularPrice = styled.span`
  font-size: 1.6rem;
  margin-right: 1rem;
`;

export const OriginalPrice = styled.span`
  font-size: 1.4rem;
  text-decoration: line-through;
  margin-right: 1rem;
`;

export const DiscountedPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: #e74c3c;
`;

export const SalePercentage = styled.span`
  font-size: 1.4rem;
  margin-left: 1rem;
  color: #e74c3c;
`;

export const AddToCartButton = styled.button`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
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

export const ReviewSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const ReviewHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

export const ReviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ReviewItem = styled.div`
  background-color: #f2f2f2;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
`;

export const ReviewUsername = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ReviewRating = styled.p`
  margin-bottom: 0.5rem;
`;

export const ReviewDescription = styled.p`
  margin-bottom: 0.5rem;
`;
