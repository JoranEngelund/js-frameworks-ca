import useApi from "../../../hooks/useApi";
import { useState, useEffect } from "react";
import Loader from "../../Loader";
import Error from "../../Error";
import { useParams } from "react-router-dom";
import * as styled from "./styled";
import { useCart } from "../../Cart/CartContext";
/**
 * Product component that displays a specific product fetched from an API.
 * Renders product card with information such as title, image, rating, price, description and reviews.
 * @returns
 */

export default function Product() {
  let { id } = useParams();
  const API_URL = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(API_URL);
  const { addToCart } = useCart();

  const products = data;

  const {
    title,
    rating,
    imageUrl,
    description,
    price,
    discountedPrice,
    id: productId,
    reviews,
  } = products;

  function handleAddToCart() {
    addToCart(products);
  }

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    const parsedCartItems = JSON.parse(savedCartItems);

    parsedCartItems.map((item) => {
      {
        item.id === productId && setAdded(true);
      }
    }, []);
  });

  return (
    <styled.ProductWrapper>
      <styled.ProductTitle>{title}</styled.ProductTitle>
      {isLoading ? <Loader /> : null}
      {isError ? <Error /> : null}
      <styled.ProductCard key={productId}>
        <styled.ProductImage src={imageUrl} alt={title} />
        <styled.ProductDetails>
          <styled.Rating>Rating: {rating}/5</styled.Rating>
          <styled.ProductName>{title}</styled.ProductName>
          <styled.ProductDescription>{description}</styled.ProductDescription>
          <styled.ProductPrices>
            {price === discountedPrice ? (
              <styled.RegularPrice>{price} ,-</styled.RegularPrice>
            ) : (
              <>
                <styled.OriginalPrice>Before: {price} ,-</styled.OriginalPrice>
                <styled.DiscountedPrice>
                  Now: {discountedPrice} ,-
                </styled.DiscountedPrice>
                <styled.SalePercentage>
                  Sale: {parseInt(((price - discountedPrice) * 100) / price)}%
                </styled.SalePercentage>
              </>
            )}
          </styled.ProductPrices>
          {added === true ? (
            <styled.AddToCartButton onClick={handleAddToCart}>
              Added to cart
            </styled.AddToCartButton>
          ) : (
            <>
              <styled.AddToCartButton onClick={handleAddToCart}>
                Add to cart
              </styled.AddToCartButton>
            </>
          )}
        </styled.ProductDetails>
      </styled.ProductCard>
      <styled.ReviewSection>
        <styled.ReviewHeading>User Reviews</styled.ReviewHeading>
        {reviews &&
          reviews.map(({ description, username, id, rating }) => (
            <styled.ReviewItem key={id}>
              <styled.ReviewUsername>{username}</styled.ReviewUsername>
              <styled.ReviewRating>Rating: {rating}/5</styled.ReviewRating>
              <styled.ReviewDescription>{description}</styled.ReviewDescription>
              <hr />
            </styled.ReviewItem>
          ))}
      </styled.ReviewSection>
    </styled.ProductWrapper>
  );
}
