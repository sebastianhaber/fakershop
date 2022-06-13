import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct, ShopContext } from '../../../context/Context';
import { StyledTile } from './ProductTile.styles';

type Props = {
    product: IProduct
}

export default function ProductTile(props: Props) {
    const { favouriteProducts, setFavouriteProducts } = useContext(ShopContext)
    const [isFavourite, setFavourite] = useState<boolean>(false);
    const addProductToFavourites = (item: IProduct)=>{
        let array = [...favouriteProducts];
        array.push(item)
        setFavouriteProducts(array)
        setFavourite(true);
    }
    const removeProductFromFavourites = (item: IProduct)=>{
        let array = [...favouriteProducts]
        const index = array.indexOf(item);
        if(index > -1) array.splice(index, 1);
        setFavouriteProducts(array)
        setFavourite(false);
    }
    const handleFavourite = (item: IProduct)=>{
        if(isFavourite) removeProductFromFavourites(item);
        else addProductToFavourites(item);
    }
    useEffect(()=>{
        if(favouriteProducts.includes(props.product)) setFavourite(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <StyledTile>
            <Link to={`/product/${props.product.id}`} className='background'><img src={props.product.image} alt={props.product.name} /></Link>
            <div className={isFavourite ? `favourite isFavourite` : `favourite`} onClick={()=>handleFavourite(props.product)}><Icon icon="akar-icons:heart" /></div>
            <Link to={`/product/${props.product.id}`} className="meta">
                <div className="name">{props.product.name}</div>
                <div className="wrapper">
                    {props.product.qty && <div className="qty-wrapper">{`Qty: <b>${props.product.qty}</b>`}</div>}
                    <div className="price underline">${props.product.price}</div>
                </div>
            </Link>
        </StyledTile>
    )
}
