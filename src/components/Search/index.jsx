import * as styled from "../Search/styled";

/**
 * Search component that returns a search form with an input for searching
 * @returns <Search />
 */

export default function Search() {
  return (
    <div>
      <styled.SearchForm>
        <styled.SearchInput
          type="search"
          name="search"
          placeholder="Search..."
        />
      </styled.SearchForm>
    </div>
  );
}
