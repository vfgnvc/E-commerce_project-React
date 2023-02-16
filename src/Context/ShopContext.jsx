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

  const AddCartIteams=(itemId)=>{

    setCartIteams((prvese)=>({...prvese,[itemId]: prvese[itemId] + 1}))
  }
  const removeCartIteams=(itemId)=>{

    setCartIteams((prvese)=>({...prvese,[itemId]: prvese[itemId] - 1}))
  }

  const contextValue = {cartIteams,AddCartIteams,removeCartIteams}
  console.log(cartIteams);
  return ( <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
   
  )
}

