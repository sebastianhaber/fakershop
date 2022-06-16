import { Icon } from "@iconify/react"
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components"
import { ShopContext } from "../../context/Context";

const Finish = () => {
    const { setCart } = useContext(ShopContext)
    useEffect(()=>{
        setCart([])
    }, [setCart])
    return (
        <StyledFinish>
            <Icon icon="akar-icons:check" />
            <p>Successful transaction!</p>
            <Link to='/' className="underline">Go to Home page</Link>
        </StyledFinish>
    )
}
const animation = keyframes`
    0%{
        transform: scale(0.2);
    }
    25%{
        transform: scale(1.2);
    }
    50%{
        transform: scale(0.8);
    }
    100%{
        transform: scale(1);
    }
`;
const StyledFinish = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    svg{
        font-size: 8rem;
        animation: ${animation} 1s ease forwards;
    }
    p{
        font-size: 1.5rem;
        font-weight: bold;
    }
    a{
        font-weight: bold;
    }
`;
export default Finish