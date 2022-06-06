import styled from 'styled-components';
export const StyledNav = styled.nav<{favouriteProductsLength: Number}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
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
    #favs{
        position: relative;
        &::after{
            content: '';
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
            background-color: ${({theme}) => theme.colors.primary};
            overflow: hidden;
            transition: height .2s ease;
            ${props => props.favouriteProductsLength > 0 && `
                content: '${props.favouriteProductsLength}';
                height: 1rem;
            `}
        }
    }
    @media screen and (min-width: 500px) {
        .box{
            gap: 2rem;
        }
    }
`;