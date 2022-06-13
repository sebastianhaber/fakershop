import { Icon } from '@iconify/react'
import styled, { keyframes } from 'styled-components'

type Props = {
    message: string
}

function Loader({message}: Props) {
  return (
    <StyledLoader>
        <div className="wrapper">
            <Icon icon="akar-icons:arrow-clockwise" />
            <p>{message}</p>
        </div>
    </StyledLoader>
  )
}
const spin = keyframes`
    to{
        transform: rotate(720deg);
    }
`;
const StyledLoader = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    .wrapper{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg{
            font-size: 3rem;
            animation: ${spin} 1.5s ease infinite;
        }
    }
`;
export default Loader