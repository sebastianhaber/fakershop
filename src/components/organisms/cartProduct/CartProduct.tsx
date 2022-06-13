import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../context/Context'
import { StyledProduct } from './CartProduct.styles'

type Props = {
    key: any,
    product: IProduct,
    handleQuantity: Function,
    handleRemoveItem: Function
}

const CartProduct = (props: Props) => {
    
    return (
        <StyledProduct>
            <Link to={`/product/${props.product.id}`} className="image">
                <img src={props.product.image} alt={props.product.name} />
            </Link>
            <div className="wrapper">
                <div className="heading">
                    <Link to={`/product/${props.product.id}`} className="name">{props.product.name}</Link>
                    <div 
                        className="removeItem" 
                        title='Delete item from shopping cart'
                        tabIndex={0}
                        onClick={()=>props.handleRemoveItem(props.product)}>
                        <Icon icon="akar-icons:cross" />
                        </div>
                </div>
                <p className="price underline">${props.product.price}</p>
                <span className="qty">
                    <div className="qty_wrapper">
                        <button onClick={()=>props.handleQuantity(props.product, 'decrease')}>-</button>
                        <p>{props.product.qty}</p>
                        <button onClick={()=>props.handleQuantity(props.product, 'encrease')}>+</button>
                    </div>
                </span>
            </div>
        </StyledProduct>
    )
}

export default CartProduct