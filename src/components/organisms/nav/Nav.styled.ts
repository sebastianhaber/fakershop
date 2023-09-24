import styled from "styled-components";
export const StyledNav = styled.nav<{
  cartItems: number;
  favouriteProductsLength: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.9);
  filter: saturate(2);
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 1rem;
  font-size: 1.5rem;
  #logo {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -3px;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
  .search {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    max-width: 500px;
    width: 100%;
    @media screen and (max-width: 850px) {
      width: 300px;
    }
    @media screen and (max-width: 600px) {
      width: 200px;
    }
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
  .box {
    display: flex;
    align-items: center;
    gap: 0.75rem !important;
    a {
      display: grid;
      place-content: center;
      padding: 0.25rem;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  #favs,
  #cart {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1rem;
      height: 0;
      border-radius: 100%;
      font-size: 0.8rem;
      display: grid;
      font-weight: bold;
      place-content: center;
      background-color: ${({ theme }) => theme.colors.primary};
      overflow: hidden;
      transition: height 0.2s ease, color 0.2s ease;
    }
    &:hover::after {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  #favs::after {
    ${(props) =>
      props.favouriteProductsLength > 0 &&
      `
            content: '${props.favouriteProductsLength}';
            height: 1rem;
        `}
  }
  #cart::after {
    ${(props) =>
      props.cartItems > 0 &&
      `
            content: '${props.cartItems}';
            height: 1rem;
        `}
  }
  @media screen and (min-width: 500px) {
    padding: 0 2rem;
    .box {
      gap: 2rem;
    }
  }
`;
