import styled from "styled-components";

export const StyledTile = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    transition: background-color .2s ease;
    &:hover{
        background-color: #F7F7F7;
    }
    .background{
        height: 300px;
        cursor: pointer;
    }
    .meta{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 1rem;
    }
    .name{
        font-weight: bold;
        width: 100%;
    }
    .price{
        position: relative;
        display: inline-block;
        font-size: 1.5rem;
        &::after{
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: ${({theme}) => theme.colors.primary};
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .favourite{
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 1;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: grid;
        place-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        border: 3px solid ${({theme}) => theme.colors.black};
        transition: all .2s ease;
        &:hover{
            color: ${({theme}) => theme.colors.primary};
        }
        &.isFavourite{
            background-color: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.black};
        }
    }
`;