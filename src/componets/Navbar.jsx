import './Navbar.css'
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../Context/ShopContext';
//import {  } from '@mui/system';

const Navbar = () => {
  const {getTotalCart} = useContext(ShopContext);
  const totalCart = getTotalCart();
  return (
    <div className='navbar'>
        <div className='link'>
           <Link to='/'>Shop</Link>
           <Link to='/cart'>
            <ShoppingCartIcon />
            <span class='badge badge-warning' id='lblCartCount'> {totalCart} </span>
           

           </Link>
           

        </div>
    </div>
  )
}

export default Navbar