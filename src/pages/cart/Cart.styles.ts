import styled from "styled-components";

export const StyledCart = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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
        min-width: 300px;
        max-width: 400px;
        width: 100%;
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
        }
        .promo{
            margin-top: 2rem;
            p{
                font-weight: bold;
            }
        }
    }
`;
