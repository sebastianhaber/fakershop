import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    .overlay{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
    }
    .wrapper{
        position: absolute;
        top: 4rem;
        left: 0;
        background-color: ${({theme}) => theme.colors.white};
        width: 100%;
        height: calc(100vh - 2rem);
        border-radius: 0;
        padding: 2rem 2rem 4rem;
        overflow: auto;
    }
    .header{
        font-weight: bold;
        font-size: 1.5rem;
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
                top: unset;
                bottom: 2rem;
                right: 2rem;
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