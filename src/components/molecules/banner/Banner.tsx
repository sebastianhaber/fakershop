import styled from 'styled-components'
import { Constants } from '../../../const/Constants';

export default function Banner() {
    const promoCode = Constants.promocode;
    return (
        <StyledBanner>
            <h2>Discounts up to 50%</h2>
            <p>Promocode: <b>{promoCode}</b></p>
        </StyledBanner>
    )
}
const StyledBanner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 2rem;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 1rem;
    h2{
        text-transform: uppercase;
    }
    @media screen and (min-width: 500px){
        height: 300px;
        border-radius: 3rem;
        h2{
            font-size: 2rem;
        }
    }
`;
