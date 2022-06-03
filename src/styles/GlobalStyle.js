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
`;