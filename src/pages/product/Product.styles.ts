import styled from "styled-components";

export const StyledProduct = styled.div`
    .header{
        font-weight: bold;
        font-size: 1.5rem;
        width: 100%;
    }
    .close-btn{
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 10;
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.black};
        background-color: ${({theme}) => theme.colors.white};
        border-radius: .5rem;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;
    }
    .item-info{
        flex: 1;
        min-width: 300px;
        .priceWrapper{
            display: block;
            margin-top: 2rem;
        }
        .buttons{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .favourite{
                position: fixed;
                right: 1rem;
                top: unset;
                bottom: 2rem;
                right: 2rem;
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
            .qty{
                width: 100%;
                margin-top: 2rem;
                &_wrapper{
                    display: flex;
                    align-items: center;
                    margin-top: 1rem;
                }
                button{
                    margin: 0;
                    padding: 0;
                    width: 3rem;
                    height: 3rem;
                    display: grid;
                    place-content: center;
                }
                p{
                    font-size: 1.5rem;
                    padding: 0 1rem;
                }
            }
        }
        button{
            margin-top: 2rem;
        }
    }
    .priceWrapper{
        p{
            display: inline-block;
            font-weight: bold;
            font-size: 1.5rem;
        }
    }
    .images{
        display: flex;
        flex-direction: column;
        width: 60%;
        img#mainImage{
            width: calc(100vw - 4rem);
            object-fit: contain;
            border-radius: .5rem;
        }
        .otherImages{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            width: calc(100vw - 4rem);
            margin-top: 2rem;
            img{
                border-radius: 0.5rem;
                height: 70px;
            }
        }
    }
    
    @media screen and (min-width: 893px) {
        .images img#mainImage{
            width: 100%;
        }
    }
`;