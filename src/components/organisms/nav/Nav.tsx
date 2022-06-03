import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <StyledNav>
            <Link to='/' id='logo'>Shop.</Link>
            <div className="box">
                <Link to='/favourites'><Icon icon="akar-icons:heart" /></Link>
                <Link to='/cart'><Icon icon="akar-icons:basket" /></Link>
                <Link to='/profile'><Icon icon="akar-icons:person" /></Link>
            </div>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(255,255,255,.9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0 2rem;
    font-size: 1.5rem;
    #logo{
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: -3px;
    }
    .box{
        display: flex;
        align-items: center;
        gap: 1rem;
        a{
            display: grid;
            place-content: center;
            padding: .5rem;
            &:hover{
                color: ${({theme}) => theme.colors.primary};
            }
        }
    }
    @media screen and (min-width: 500px) {
        .box{
            gap: 2rem;
        }
    }
`;