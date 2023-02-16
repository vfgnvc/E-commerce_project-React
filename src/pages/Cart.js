import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { PRODUCTS } from '../Products';
import CartItem from './CartItem';
import './Cart.css'
function Cart() {
  const {cartIteams} = useContext(ShopContext)
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
    </div>
  )
}

export default Cart
