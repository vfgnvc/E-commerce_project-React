import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Payment from './Payment';
const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {AddCartIteams,cartIteams,removeCartIteams} = useContext(ShopContext);
    
  return (
    <div className='cartItem'>
        <img src={productImage} alt='productimage' />
        <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeCartIteams(id)}> - </button>
          <input
            value={cartIteams[id]}
           
          />
          <button onClick={() => AddCartIteams(id)}> + </button>
          
        </div>
       
       
        </div>
        
    </div>
  )
}

export default CartItem