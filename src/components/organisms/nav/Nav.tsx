import { Icon } from "@iconify/react";
import { useContext, useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ShopContext } from "../../../context/Context";
import { StyledNav } from "./Nav.styled";

const Nav = () => {
  const { favouriteProducts, cart } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === "/", [location]);

  const handleSearch = (value: string) => {
    if (!value) searchParams.delete("q");
    else searchParams.set("q", value.trim());
    setSearchParams(searchParams);
  };

  return (
    <StyledNav
      cartItems={cart.length}
      favouriteProductsLength={favouriteProducts.length}
    >
      <Link to="/" id="logo">
        {/* Shop. */}
        BIO - SHOP.
      </Link>

      {isHomePage && (
        <input
          type="search"
          placeholder="Search product..."
          className="search"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
          autoFocus={query.length > 0}
        />
      )}
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
