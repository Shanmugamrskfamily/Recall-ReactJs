import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './CartContext.jsx';

const rootElement=document.getElementById('root');
const root=ReactDOM.createRoot(rootElement);
root.render(
  <CartProvider>
  <App/>
  </CartProvider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
