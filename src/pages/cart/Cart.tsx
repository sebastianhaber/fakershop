import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IProduct, ShopContext } from "../../context/Context"
import { StyledCart } from "./Cart.styles"
import NoDataSVG from '../../assets/undraw_no_data_re_kwbl.svg'
import CartProduct from "../../components/organisms/cartProduct/CartProduct"
import { Constants } from "../../const/Constants"

const Cart = () => {
    const { cart, setCart } = useContext(ShopContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalPricePromo, setTotalPricePromo] = useState<number>(0);
    const [promoCodeValue, setPromoCodeValue] = useState<string>('')

    const handleQuantity = (product: IProduct, action: string)=>{
        let newCart = [...cart];
        let quantity = product.qty ? product.qty : 1;
        const index = newCart.indexOf(product);

        if(!product.qty) return;

        if(action === 'decrease'){
            if(quantity === 1){
                const confirmBox = window.confirm('Do you want to remove product from the cart?')
                if(confirmBox){
                    if(index > -1) newCart.splice(index, 1);
                }
            } else{
                newCart[index] = {...product, qty: --quantity}
            }
        } else if(action === 'encrease'){
            newCart[index] = {...product, qty: ++quantity}
        }
        setCart(newCart)
    }
    const handleRemoveItem = (product: IProduct)=>{
        if(window.confirm(`Do you want to delete '${product.name}' from shopping cart?`)){
            let newCart = [...cart];
            const index = newCart.indexOf(product);
            if(index > -1) {
                newCart.splice(index, 1);
                setCart(newCart)
            } 
        }
    }
    const handleChangePromoCodeValue = (e: any)=>{
        setPromoCodeValue(e.target.value)
    }

    useEffect(()=>{
        if(cart){
            let price = 0;
            cart.map(item => {
                if(item.qty){
                    return price += (Number.parseFloat(item.price)*item.qty);
                }
                return 0;
            })
            setTotalPrice(price);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])
    useEffect(()=>{
        if(promoCodeValue === Constants.promocode.code){
            setTotalPricePromo(totalPrice*((100-Constants.promocode.percentOff)/100))
        } else{
            setTotalPricePromo(0)
        }
    }, [totalPrice, promoCodeValue])

    if(!cart.length) {
        return (
            <StyledCart>
                <div className="emptyCart">
                    <div className="noFavs">
                        <p>Your cart is empty 😕</p>
                        <img src={NoDataSVG} alt="" />
                        <Link to='/' className="shopNow underline">Shop now</Link>
                    </div>
                </div>
            </StyledCart>
        )
    }
    return (
        <StyledCart>
            <div className="products">
                <h2 className="underline">Your products</h2>
                <div className="products_wrapper">
                    {cart.map((item, index) => (
                        <CartProduct key={index} product={item} handleQuantity={handleQuantity} handleRemoveItem={handleRemoveItem} />
                    ))}
                </div>
            </div>
            <div className="details">
                <h2 className="underline">Details</h2>
                <div className="promo">
                    <p>Promo code</p>
                    <input type="text" value={promoCodeValue} onChange={handleChangePromoCodeValue} />
                </div>
                <span className="totalCost">
                    <p>Total cost:</p>
                    <p className="price">${totalPricePromo ? totalPricePromo.toFixed(2) : totalPrice.toFixed(2)}</p>
                </span>
                <Link to='/order'><button className="full">Shipping & Payment</button></Link>
            </div>
        </StyledCart>
    )
}

export default Cart