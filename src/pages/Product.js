import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {AddCartIteams,cartIteams} = useContext(ShopContext);
  const cartitemAmount = cartIteams[id]
  return (
    <div className="product">
       <img src={productImage} alt='productimage' />
       <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className='addToCartBttn' onClick={()=>AddCartIteams(id)}>
        Add to cart {cartitemAmount > 0 &&<>({cartitemAmount})</> }
        </button>
    </div>
  )
}

export default Product