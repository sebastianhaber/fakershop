import styled from "styled-components";

export const StyledFavouriteWrapper = styled.section`
    .noFavs{
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
    .products{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;