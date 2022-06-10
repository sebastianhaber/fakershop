import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { IProduct, ShopContext } from '../../../context/Context';
import ProductModal from '../../organisms/productModal/ProductModal';
import { StyledTile } from './ProductTile.styles';

export default function ProductTile({product}: any) {
    const { favouriteProducts, setFavouriteProducts } = useContext(ShopContext)
    const [isFavourite, setFavourite] = useState<boolean>(false);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
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
    const handleToggleModal = ()=>{
        setModalOpen(prev => !prev)
        document.body.classList.toggle('hideScrollbar')
    }
    return (
        <StyledTile>
            {isModalOpen && <ProductModal isFavourite={isFavourite} handleFavourite={handleFavourite} product={product} onClose={handleToggleModal} />}
            <div className='background' onClick={handleToggleModal}><img src={product.image} alt={product.name} /></div>
            <div className={isFavourite ? `favourite isFavourite` : `favourite`} onClick={()=>handleFavourite(product)}><Icon icon="akar-icons:heart" /></div>
            <div className="meta" onClick={handleToggleModal}>
                <div className="name">{product.name}</div>
                <div className="price">${product.price}</div>
            </div>
        </StyledTile>
    )
}
