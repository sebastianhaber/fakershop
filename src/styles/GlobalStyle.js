import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body{
        font-family: 'Work Sans', sans-serif;
        line-height: 1.45;
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
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
`;