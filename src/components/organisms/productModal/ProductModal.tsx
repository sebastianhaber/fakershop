import { Icon } from '@iconify/react';
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { IProduct, ShopContext } from '../../../context/Context';
import { StyledModal } from './ProductModal.styles';

export default function ProductModal({product, onClose, isFavourite, handleFavourite}: any) {
    const { setCart, cart } = useContext(ShopContext)
    const [mainImageUrl, setMainImageUrl] = useState<string>(product.image);
    const [selectedQty, setSelectedQty] = useState<number>(1);
    const addQty = ()=>{
        setSelectedQty(prev => prev+1);
    }
    const decreaseQty = ()=>{
        if(selectedQty > 1){
            setSelectedQty(prev => prev-1)
        }
    }
    const addToCart = (item: IProduct)=>{
        let array = [...cart];
        array.push(item)
        setCart(array)
    }
    // const removeFromCart = (item: IProduct)=>{
    //     let array = [...cart]
    //     const index = array.indexOf(item);
    //     if(index > -1) array.splice(index, 1);
    //     setCart(array)
    // }
    const handeAddToCart = ()=>{
        if(cart.includes(product)){
            console.log('includes')
            let newProduct = {...product}
            if(!product.qty){
                newProduct = {...newProduct, qty: 1}
            } else{
                newProduct = {...newProduct, qty: product.qty++}
            }
            addToCart(newProduct)
        } else{
            addToCart(product);
        }
    }

    return (
        <StyledModal>
            <div className="overlay" onClick={onClose}></div>
            <div className="close-btn" onClick={onClose}><Icon icon="akar-icons:cross" /></div>
            <div className="wrapper">
                <div className="header">
                    <p className="title">{product.name}</p>
                </div>
                <div className="flex">
                    <div className="images">
                        <img src={mainImageUrl} alt={product.name} id='mainImage' />
                        <div className="otherImages">
                            <div onClick={()=>setMainImageUrl(product.image)}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            {product.images.map((image: any, index: number) => (
                                <div key={index} onClick={()=>setMainImageUrl(image.url)}>
                                    <img src={image.url} alt={product.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="item-info">
                        <h2>{product.name}</h2>
                        <p className="description">{product.description}</p>
                        <span className='priceWrapper'>Price: <p className="price">${product.price}</p></span>
                        <div className="buttons">
                            <div title='Add to favourites' className={isFavourite ? `favourite isFavourite` : `favourite`} onClick={()=>handleFavourite(product)}><Icon icon="akar-icons:heart" /></div>
                            <div className="qty">
                                <button onClick={decreaseQty} disabled={selectedQty<2}>-</button>
                                <p>{selectedQty}</p>
                                <button onClick={addQty}>+</button>
                            </div>
                            <button className="full" onClick={handeAddToCart}>Add to cart {`($${(selectedQty*Number.parseFloat(product.price)).toFixed(2)})`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledModal>
    )
}
