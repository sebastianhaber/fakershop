import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <StyledNav>
            <div id="logo">Shop</div>
            <div className="box">
                <Link to='/favourites'><Icon icon="akar-icons:heart" /></Link>
                <Link to='/cart'><Icon icon="akar-icons:basket" /></Link>
                <Link to='/profile'><Icon icon="akar-icons:person" /></Link>
            </div>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 2rem;
    #logo{
        font-weight: bold;
        font-size: 1.5rem;
    }
`;