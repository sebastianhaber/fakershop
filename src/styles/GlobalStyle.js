import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body{
        font-family: -apple-system, BlinkMacSystemFont, 'Work Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.45;
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
        &.hideScrollbar{
            overflow: hidden;
        }
    }
    main{
        margin: calc(70px + 1rem) auto 0;
        max-width: 1920px;
        padding: 2rem 1rem;
        @media screen and (min-width: 500px){
            padding: 2rem;
        }
    }
    a{
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        transition: color .2s ease;
    }
    img{
        display: block;
    }
    button{
        border-radius: 0.5rem;
        padding: 1rem 2rem;
        font: inherit;
        border: 0;
        max-width: 500px;
        width: 100%;
        font-weight: bold;
        cursor: pointer;
        background-color: ${({theme}) => theme.colors.lightGray};
        &.full{
            background-color: ${({theme}) => theme.colors.primary};
        }
        &:disabled{
            cursor: not-allowed;
        }
        &:active{
            transform: scale(0.98);
        }
    }
    input{
        font: inherit;
        border: 2px solid ${({theme}) => theme.colors.primary};
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }
    .underline{
        position: relative;
        z-index: 1;
        &::after{
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0;
            width: 100%;
            height: 3px;
            z-index: -1;
            background-color: ${({theme}) => theme.colors.primary};
            transition: all .2s ease;
        }
    }
    .noFavs, .emptyCart{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        text-align: center;
        font-weight: bold;
        a{
            overflow: hidden;
            font-size: 1.5rem;
            &:hover::after{
                transform: translateX(100%);
            }
        }
        img{
            width: 100%;
            max-width: 300px;
        }
    }
`;