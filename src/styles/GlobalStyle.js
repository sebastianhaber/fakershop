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
        padding: 0 2rem;
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
        &.full{
            background-color: ${({theme}) => theme.colors.primary};
        }
        &:disabled{
            cursor: not-allowed;
        }
    }
    .underline{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: ${({theme}) => theme.colors.primary};
            transition: all .2s ease;
        }
    }
`;