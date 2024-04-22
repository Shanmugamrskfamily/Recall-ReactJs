import React,{useContext} from 'react'
import { ProductContext } from './ProductContext'
function Product() {
    const {status,name,age,mobile}=useContext(ProductContext);
  return (
    <div>
            <ul>
                <li>Customer Name:{name}</li>
                <li>Customer Age:{age}</li>
                <li>Customer Mobile Number:{mobile}</li>
                <li>Product Current Status:{status}</li>
            </ul>
        </div>
  )
}

export default Product