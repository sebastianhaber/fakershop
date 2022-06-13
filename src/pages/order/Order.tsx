import { Icon } from '@iconify/react'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/Context'
import { getTotalPrice } from '../cart/Cart'
import { StyledOrder } from './Order.styles'

type InputProps = {
    id: string,
    type: 'text' | 'email' | 'tel',
    placeholder: string,
    display: string
}
interface Steps {
    step: 'shipping' | 'payment' | 'finish'
}

const Order = () => {
    const { cart, discount } = useContext(ShopContext)
    const navigate = useNavigate()
    const [step, setStep] = useState<Steps>({step: 'shipping'});
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(()=>{
        if(cart.length){
            let total = getTotalPrice(cart);
            if(discount.isActive && discount.totalPrice){
                setTotalPrice(discount.totalPrice)
            } else setTotalPrice(total)
        } else return navigate('/')
    }, [cart, discount, navigate])
    return (
        <StyledOrder>
            {step.step === 'shipping' && (
                <Link to='/cart' id="back-btn"><Icon icon="akar-icons:arrow-left" /> Back to cart</Link>
                )}
            {step.step === 'payment' && (
                <p id="back-btn" onClick={()=>setStep({step: 'shipping'})}><Icon icon="akar-icons:arrow-left" /> Back to shipping</p>
            )}
            {step.step !== 'finish' && <h1>Shipping & Payment</h1>}
            <div className="wrapper">
                <p className="discount">{discount.isActive && `Discount ${discount.percentOff}% is active.`}</p>
                {step.step === 'shipping' && (
                    <>
                        <div className="form">
                            <Input id='fullName' display='Full name' placeholder='John Doe' type='text' />
                            <Input id='email' display='E-mail' placeholder='johndoe@example.com' type='email' />
                            <Input id='number' display='Phone number' placeholder='+48 123 456 789' type='tel' />
                            <Input id='city' display='City' placeholder='Gdansk, Poland' type='text' />
                            <Input id='address' display='Address' placeholder='Spooky street 21' type='text' />
                        </div>
                        <div className="footer">
                            <button className="full" onClick={()=>setStep({step: 'payment'})}>Next</button>
                        </div>
                    </>
                )}
                {step.step === 'payment' && (
                    <>
                        <div className="form">
                            <Input id='card' display='Card number' placeholder='4242 4242 4242 4242' type='tel' />
                            <Input id='date' display='Valid thru' placeholder='MM/YY' type='tel' />
                            <Input id='cvv' display='CVV' placeholder='123' type='tel' />
                        </div>
                        <div className="footer">
                            <Link to='/finish-order'><button className="full">Finish payment (${totalPrice.toFixed(2)})</button></Link>
                        </div>
                    </>
                )}
            </div>
        </StyledOrder>
    )
}
const Input = ({id, type, placeholder, display}: InputProps) => (
    <label htmlFor={id}>
        <p>{display}</p>
        <input type={type} id={id} placeholder={placeholder} />
    </label>
)
export default Order