import React from "react";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import Loader from "../Loader";
import * as styled from "../Search/styled";

/**
 * Search component for filtering and displaying search results.
 * @returns {JSX.Element} Search component JSX
 */

export default function Search() {
  const API_URL = `https://api.noroff.dev/api/v1/online-shop`;
  const { data, isLoading } = useApi(API_URL);

  const productsData = data;

  const [searchQuery, setSearchQuery] = useState("");

  const inputQuery = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  const filteredQuery = productsData.filter((product) => {
    const productTitle = product.title.trim().toLowerCase();
    const searchQueryLowerCase = searchQuery.toLowerCase();

    return productTitle.includes(searchQueryLowerCase) && searchQuery !== "";
  });

  console.log(filteredQuery);
  return (
    <div>
      <styled.SearchForm>
        <styled.SearchInput
          type="search"
          name="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={inputQuery}
        />
        {filteredQuery.length > 0 && (
          <styled.ResultContainer>
            {filteredQuery.map((product) => (
              <styled.QueryResult
                key={product.id}
                href={`/product/${product.id}`}
              >
                {isLoading ? <Loader /> : ""}
                <styled.QueryThumbnail
                  src={product.imageUrl}
                  alt={product.title}
                />
                <p>{product.title}</p>
              </styled.QueryResult>
            ))}
          </styled.ResultContainer>
        )}
      </styled.SearchForm>
    </div>
  );
}
