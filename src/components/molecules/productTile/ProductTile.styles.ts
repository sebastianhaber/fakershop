import styled from 'styled-components';

export const StyledTile = styled.div`
  position: relative;
  width: 300px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  overflow: hidden;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #f0f0f0;
  }
  .background {
    cursor: pointer;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  .meta {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .name {
    font-weight: bold;
    width: 100%;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .qty-wrapper {
    width: 100%;
    margin-top: 1rem;
  }
  .price {
    display: inline-block;
    font-size: 1.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .favourite {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.black};
    transition: all 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
    &.isFavourite {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
