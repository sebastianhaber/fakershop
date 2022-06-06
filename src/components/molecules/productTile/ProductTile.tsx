import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../../../context/Context';

export default function ProductTile({product}: any) {
    const { favouriteProducts, setFavouriteProducts } = useContext(ShopContext)
    const [isFavourite, setFavourite] = useState<boolean>(false);
    const addProductToFavourites = ()=>{
        let array = [...favouriteProducts];
        array.push(product)
        setFavouriteProducts(array)
        setFavourite(true);
    }
    const removeProductFromFavourites = ()=>{
        let array = [...favouriteProducts]
        const index = array.indexOf(product);
        if(index > -1) array.splice(index, 1);
        setFavouriteProducts(array)
        setFavourite(false);
    }
    const handleFavourite = ()=>{
        if(isFavourite) removeProductFromFavourites();
        else addProductToFavourites();
    }
    return (
        <StyledTile>
            <div className='background'><img src={product.image} alt={product.name} /></div>
            <div className={isFavourite ? `favourite isFavourite` : `favourite`} onClick={handleFavourite}><Icon icon="akar-icons:heart" /></div>
            <div className="meta">
                <div className="name">{product.name}</div>
                <div className="price">${product.price}</div>
            </div>
        </StyledTile>
    )
}
const StyledTile = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    .background{
        height: 300px;
    }
    .meta{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 1rem 0;
    }
    .name{
        font-weight: bold;
        width: 100%;
    }
    .price{
        position: relative;
        display: inline-block;
        font-size: 1.5rem;
        &::after{
            content: '';
            position: absolute;
            bottom: 3px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: ${({theme}) => theme.colors.primary};
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .favourite{
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 1;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: grid;
        place-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        transition: color .2s ease;
        &:hover{
            color: ${({theme}) => theme.colors.primary};
        }
        &.isFavourite{
            color: ${({theme}) => theme.colors.primary};
        }
    }
`;