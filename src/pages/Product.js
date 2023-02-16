import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {AddCartIteams,cartIteams} = useContext(ShopContext);
  const cartIteamAmount = cartIteams[id]
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
        Add to cart {cartIteamAmount > 0 &&<>({cartIteamAmount})</> }
        </button>
    </div>
  )
}

export default Product