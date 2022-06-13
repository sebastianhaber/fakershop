import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react'
import { Store } from 'react-notifications-component';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/molecules/loader/Loader';
import { IProduct, ShopContext } from '../../context/Context';
import { StyledProduct } from './Product.styles';

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, cart, setCart, favouriteProducts, setFavouriteProducts } = useContext(ShopContext)
    const [selectedQty, setSelectedQty] = useState<number>(1);
    const [product, setProduct] = useState<IProduct>();
    const [mainImageUrl, setMainImageUrl] = useState<string>('');
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
        let newItem = item;
        const itemWithQty = newItem.qty ? newItem : {...newItem, qty: selectedQty};
        array.push(itemWithQty)
        setCart(array)
    }
    const handeAddToCart = ()=>{
        if(product && cart.find(item => item.id === product.id)){
            const index = cart.findIndex(item => item.id === product.id);
            let newProduct = cart[index]
            let newArray = cart;
            if(!newProduct.qty){
                newProduct = {...newProduct, qty: selectedQty}
            } else{
                newProduct = {...newProduct, qty: newProduct.qty+selectedQty}
            }
            newArray[index] = newProduct
            setCart(newArray)
        } 
        else{
            if(product) addToCart(product);
        }
        Store.addNotification({
            title: "The product has been added to the cart!",
            type: "success",
            insert: "top",
            container: "top-left",
            animationIn: ["animate__animated", "animate__bounceIn"],
            animationOut: ["animate__animated", "animate__bounceOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
        });
    }
    useEffect(()=>{
        if(!id) {
            return navigate('/')
        }
        else{
            const item = products.find(element => {
                if(element.id === Number.parseInt(id)) return element
                return null
            })
            if(item) setProduct(item)
            else return navigate('/')
        }
    }, [id, navigate, products])
    useEffect(()=>{
        if(product) setMainImageUrl(product.image)
    }, [product])
    useEffect(()=>{
        if(product && favouriteProducts.includes(product)) setFavourite(true)
    }, [product, favouriteProducts])
    if(!product) return <Loader message='Getting product details...' />
    return (
        <StyledProduct>
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
                    {product.qty && <div className="qty-wrapper">{`Qty: <b>${product.qty}</b>`}</div>}
                    <span className='priceWrapper'>Price: <p className="price underline">${product.price}</p></span>
                    <div className="buttons">
                        <div title={isFavourite ? `Remove from favourite products`: `Add to favourite products`} className={isFavourite ? `favourite isFavourite` : `favourite`} onClick={()=>handleFavourite(product)}><Icon icon="akar-icons:heart" /></div>
                        <div className="qty">
                            <h4>Quantity</h4>
                            <div className="qty_wrapper">
                                <button onClick={decreaseQty} disabled={selectedQty<2}>-</button>
                                <p>{selectedQty}</p>
                                <button onClick={addQty}>+</button>
                            </div>
                        </div>
                        <button className="full" onClick={handeAddToCart}>Add to cart {`($${(selectedQty*Number.parseFloat(product.price)).toFixed(2)})`}</button>
                    </div>
                </div>
            </div>
        </StyledProduct>
    )
}
