import useApi from "../../../hooks/useApi";
import Loader from "../../Loader";
import Error from "../../Error";
import * as styled from "./styled";

/**
 * Home component that displays a list of products fetched from an API.
 * Renders product cards with information such as title, image, rating, price, and description.
 *
 * @component
 * @example
 * return <Home />;
 */
export default function Home() {
  const API_URL = `https://api.noroff.dev/api/v1/online-shop`;
  const { data, isLoading, isError } = useApi(API_URL);

  const products = data;

  return (
    <styled.ProductList>
      <styled.PageHeading>Products</styled.PageHeading>
      {isLoading ? <Loader /> : ""}
      {isError ? <Error /> : ""}
      {products.map(
        ({
          id,
          title,
          imageUrl,
          rating,
          price,
          discountedPrice,
          description,
        }) => (
          <styled.ProductCardWrapper key={id}>
            <styled.ProductImage src={imageUrl} alt={title} />
            <styled.ProductDetails>
              <h3>Rating: {rating}/5</h3>
              <styled.ProductTitle>{title}</styled.ProductTitle>
              <styled.ProductDescription>
                {description}
              </styled.ProductDescription>
              <styled.ProductPrices>
                {price === discountedPrice ? (
                  <styled.ProductPrice>{price},-</styled.ProductPrice>
                ) : (
                  <>
                    <styled.ProductOriginalPrice>
                      Before: {price},-
                    </styled.ProductOriginalPrice>
                    <styled.ProductDiscountedPrice>
                      Now: {discountedPrice},-
                    </styled.ProductDiscountedPrice>
                    <styled.ProductSale>
                      Sale:{" "}
                      {parseInt(((price - discountedPrice) * 100) / price)}%
                    </styled.ProductSale>
                  </>
                )}
              </styled.ProductPrices>
              <styled.ProductLink href={`/product/${id}`}>
                View Product
              </styled.ProductLink>
            </styled.ProductDetails>
          </styled.ProductCardWrapper>
        )
      )}
    </styled.ProductList>
  );
}
