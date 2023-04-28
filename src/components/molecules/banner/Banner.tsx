import styled from 'styled-components';
import { Constants } from '../../../const/Constants';

export default function Banner() {
  const promoCode = Constants.promocode;
  return (
    <StyledBanner>
      <h2>Discounts up to {promoCode.percentOff}%</h2>
      <p>
        Promocode: <b>{promoCode.code}</b>
      </p>
    </StyledBanner>
  );
}
const StyledBanner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('https://images.unsplash.com/photo-1523349312806-f5dde0a01c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  color: white;
  /* background-image: url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 1rem;
  h2 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 500px) {
    height: 300px;
    h2 {
      font-size: 2rem;
    }
  }
`;
