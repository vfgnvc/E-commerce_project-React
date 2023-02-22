import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { PRODUCTS } from '../Products';
import CartItem from './CartItem';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {cartIteams,getTotalCartAmout,getTotalCart} = useContext(ShopContext)
  const totalAmount= getTotalCartAmout();
  const totalCart = getTotalCart();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Iteam</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartIteams[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalCart > 0 ?
        <div className="checkout">
          <p> Total Amount: ${totalAmount} </p>
          <div className='buynowbutton'>
        <button onClick={() => navigate("/payment")}>Buy Now</button>
        </div>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          </div>
      :<h1>your cart is Empty</h1>}
    </div>
  )
}

export default Cart
