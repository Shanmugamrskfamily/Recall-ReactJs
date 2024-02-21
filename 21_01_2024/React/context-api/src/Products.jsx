import React, { useContext, useState } from 'react'
import { ProductContext } from './ProductContext'

function Products() {
    const {status, statusUpdate}=useContext(ProductContext);
    const [input,setInput]=useState('');
    const handleUpdate=()=>{
        statusUpdate(input);
    }

  return (
    <div>
        <h1>Products</h1>
        <div>
            <p>Item: Redmi 11 Mobile</p>
            <p>Status:{status}</p>
        </div>
        <div>
            <h3>Change The Status</h3>
            <input type="text" name="input" id="input" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleUpdate}>Send Update</button>
        </div>
    </div>
  )
}

export default Products