import * as styled from "./styled";

/**
 * Loader component that displays a loadingIcon
 * @returns <Loader />
 */
export default function Loader() {
  return (
    <styled.LoadingContainer>
      <styled.Loader />
    </styled.LoadingContainer>
  );
}
