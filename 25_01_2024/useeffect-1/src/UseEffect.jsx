import React, { useEffect, useReducer, useState } from 'react'

const initialCart={quantity:0}

const cartReducer=(state,action)=>{
    switch(action.type){
        case '-':
            if(state.quantity<=0){
                alert('Quantity Below "0" !!');
                return state;
            }
            return {...state,quantity:state.quantity-1}
        case '+':
            return {...state,quantity:state.quantity+1}
        default:
            return state;
    }
}

function UseEffect() {
    const [cartStatus,dispatch]=useReducer(cartReducer,initialCart);
    const [price,setPrice]=useState('0');


    useEffect(()=>{
        setPrice(200*cartStatus.quantity);
    },[cartStatus.quantity]);

    const increment=()=>{
        dispatch({type:'+'});
        
    }
    const decrease=()=>{
        dispatch({type:'-'});

    }

  return (
    <div>
        <h1>Shoping Cart</h1>
        <p>Cart Quantity: <button style={{padding:'10px',margin:'10px'}} onClick={decrease}>-</button> {cartStatus.quantity} <button style={{padding:'10px',margin:'10px'}} onClick={increment}>+</button></p>
        <p>Price: 200</p>
        <p>Total Price: {price}</p>
        
    </div>
  )
}

export default UseEffect