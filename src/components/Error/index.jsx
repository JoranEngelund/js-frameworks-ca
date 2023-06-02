import * as styled from "./styled";

/**
 * Error component that returns an error message alongside a refresh button for the user to refresh the page
 * @returns <Error />
 */
export default function Error() {
  return (
    <styled.ErrorContainer>
      <h2>There was an error loading the products, please refresh the page</h2>
      <div>
        <styled.ErrorButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </styled.ErrorButton>
      </div>
    </styled.ErrorContainer>
  );
}
