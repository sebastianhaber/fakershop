import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/Context';
import { StyledNav } from './Nav.styled';

const Nav = () => {
  const { favouriteProducts, cart } = useContext(ShopContext);

  return (
    <StyledNav
      cartItems={cart.length}
      favouriteProductsLength={favouriteProducts.length}
    >
      <Link to="/" id="logo">
        {/* Shop. */}
        BIO - SHOP.
      </Link>
      <input type="search" placeholder="Search product..." className="search" />
      <div className="box">
        <Link to="/favourites" id="favs">
          <Icon icon="akar-icons:heart" />
        </Link>
        <Link to="/cart" id="cart">
          <Icon icon="akar-icons:basket" />
        </Link>
        <Icon icon="akar-icons:person" />
        {/* <Link to='/profile'><Icon icon="akar-icons:person" /></Link> */}
      </div>
    </StyledNav>
  );
};

export default Nav;
