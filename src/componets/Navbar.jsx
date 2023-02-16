import './Navbar.css'
import React from 'react'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='link'>
           <Link to='/'>Shop</Link>
           <Link to='/cart'>
            <ShoppingCartIcon size={32}/>

           </Link>

        </div>
    </div>
  )
}

export default Navbar