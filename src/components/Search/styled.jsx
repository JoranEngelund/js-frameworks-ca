import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ResultContainer = styled.div`
  position: absolute;
  top: 74%;
  max-height: 32rem;
  min-width: 147px;
  max-width: 0;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  @media (max-width: 768px) {
    top: 82%;
  }
`;

export const QueryResult = styled.a`
  text-decoration: none;
  display: flex;
  gap: 1rem;
  transition: box-shadow 0.3s ease;
  color: black;
  border-bottom: 1px solid lightgray;

  &:hover,
  &:focus {
    background-color: #ebebeb;
    outline: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  }
`;

export const QueryThumbnail = styled.img`
  max-width: 23%;
  object-fit: contain;
`;
