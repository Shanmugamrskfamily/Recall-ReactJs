import React from 'react'
import ProductStatus from './ProductStatus'
import Product from './Product'
import { ProductProvider } from './ProductContext'
import './App.css'

function App() {
  

  return (
    <div>
      <ProductProvider>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}}>
          <h1>Product Status Changing APP</h1>
          <ProductStatus/>
          <Product/>
        </div>
      </ProductProvider>
      </div>
  )
}

export default App
