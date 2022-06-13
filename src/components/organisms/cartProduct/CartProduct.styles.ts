import styled from "styled-components";

export const StyledProduct = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid ${({theme}) => theme.colors.lightGray};
    border-radius: 0.5rem;
    .image{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .wrapper{
        flex: 1;
    }
    .heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .removeItem{
            display: grid;
            place-content: center;
            cursor: pointer;
            font-size: 1.5rem;
        }
    }
    .name{
        font-weight: bold;
        font-size: 1.2rem;
    }
    .price{
        display: inline-block;
    }
    .qty{
        &_wrapper{
            display: flex;
            align-items: center;
            margin-top: 1rem;
            gap: 1rem;
            button{
                max-width: 3rem;
                display: grid;
                place-content: center;
            }
        }
    }
`;