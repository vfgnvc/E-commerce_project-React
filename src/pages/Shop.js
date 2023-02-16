

import './shop.css'
import { PRODUCTS } from '../Products';
import Product from './Product';
           
      const Shop = () => {
        return  (
          <div>
            <div className='shopTitle'>
              <h1>Shoping Home</h1>
            </div>
          <div className='products'>
            {PRODUCTS.map((product)=>{
             return  <div key={product.id} >
             <Product data={product} />
              </div>
              
            
            })}
            
      
          </div>
          
          </div>
        )
      }
      
      export default Shop 