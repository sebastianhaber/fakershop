import styled from "styled-components";

export const StyledCart = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    h2{
        display: inline-block;
    }
    .products{
        flex: 1;
        min-width: 300px;
        &_wrapper{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    .details{
        width: 100%;
        background-color: ${({theme}) => theme.colors.lightGray};
        padding: 2rem;
        border-radius: 0.5rem;
        .totalCost{
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            .price{
                font-weight: bold;
                font-size: 1.5rem;
            }
        }
        button{
            margin-top: 2rem;
            width: unset;
        }
        .promo{
            margin-top: 2rem;
            p{
                font-weight: bold;
            }
        }
        @media screen and (min-width: 848px) {
            width: unset;
        }
    }
`;
