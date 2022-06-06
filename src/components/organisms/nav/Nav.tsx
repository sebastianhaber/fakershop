import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../../context/Context';
import { StyledNav } from './Nav.styled';

const Nav = () => {
    const { favouriteProducts } = useContext(ShopContext)
    const [favouriteProdsLength, setFavouriteProdsLength] = useState<Number>(0);

    useEffect(()=>{
        setFavouriteProdsLength(favouriteProducts.length);
    }, [favouriteProducts])
    return (
        <StyledNav favouriteProductsLength={favouriteProdsLength}>
            <Link to='/' id='logo'>Shop.</Link>
            <div className="box">
                <Link to='/favourites' id='favs'><Icon icon="akar-icons:heart" /></Link>
                <Link to='/cart'><Icon icon="akar-icons:basket" /></Link>
                <Link to='/profile'><Icon icon="akar-icons:person" /></Link>
            </div>
        </StyledNav>
    )
}

export default Nav
