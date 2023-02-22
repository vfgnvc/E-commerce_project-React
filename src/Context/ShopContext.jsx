import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';

export  const ShopContext=createContext(null)

const GetDefultCart=()=>{
  let cart={};
  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0;
  }
  return cart;
}

export const  ShopContextProvider = (props) => {
  const [cartIteams,setCartIteams]=useState(GetDefultCart())

const getTotalCartAmout = ()=>{
  let totalAmount = 0;
  for(const item in cartIteams){
    if(cartIteams[item]>0){
      let itemInfo = PRODUCTS.find((product)=>product.id===Number(item))
      totalAmount += cartIteams[item] * itemInfo.price; 
    }
    
 }
  return totalAmount;
}
 const getTotalCart = ()=>{
  let totalCart = 0;
  for(const item1 in cartIteams){
    if(cartIteams[item1]>0){
      totalCart += cartIteams[item1]
    }
    
 }
  return totalCart;
}

  const AddCartIteams=(itemId)=>{

    setCartIteams((prvese)=>({...prvese,[itemId]: prvese[itemId] + 1}))
  }
  const removeCartIteams=(itemId)=>{

    setCartIteams((prvese)=>({...prvese,[itemId]: prvese[itemId] - 1}))
  }

  const contextValue = {cartIteams,AddCartIteams,removeCartIteams,getTotalCartAmout,getTotalCart}
  //console.log(cartIteams);
  return ( <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
   
  )
}

