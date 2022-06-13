import styled from "styled-components";

export const StyledOrder = styled.section`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({theme}) => theme.colors.lightGray};
    #back-btn{
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: fit-content;
        padding: 0 0.5rem;
        z-index: 1;
        margin-bottom: 1rem;
        cursor: pointer;
        overflow: hidden;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-color: ${({theme}) => theme.colors.primary};
            transform: translateX(-100%);
            transition: transform .2s ease;
        }
        &:hover::after{
            transform: translateX(0);
        }
    }
    h1, .discount{
        text-align: center;
    }
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
    }
    button{
        margin: 0 auto;
        width: unset;
    }
    .footer{
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
    }
    @media screen and (min-width: 500px) {
        padding: 2rem;
    }
`;