import React,{useReducer} from 'react'
import { useState } from 'react';

const initialState={totalProducts:0, totalSold: 0, totalBaught:0};

const storeReducer=(state,action)=>{
    switch (action.type){
        case 'BUY':
        return {
            ...state,totalProducts: state.totalProducts+1, totalBaught: state.totalBaught+1
        };
        case 'SELL':
            if(state.totalProducts<=0){
                alert('No Product Available to Sell!');
                return state;
            }
            return{
                ...state,totalProducts: state.totalProducts-1, totalSold: state.totalSold+1
            };
            default:
                return state;
    }
}

function Store() {
    const [storeState,dispatch]=useReducer(storeReducer,initialState);
    const [action,setAction]=useState('');

    const handleAction=()=>{
        const data=action.toUpperCase();
        dispatch({type: data});
    }

  return (
    <div>
        <h1>Welcome to My Small Store</h1>
        <p>Total Available Products Now: {storeState.totalProducts}</p>
        <p>Total Baught Products: {storeState.totalBaught}</p>
        <p>Total Sold Products: {storeState.totalSold}</p>
        <label style={{margin:'5px'}} htmlFor="action">Enter Action To Store</label>
        <input type="text" placeholder='Enter Buy or Sell' value={action} onChange={(e)=>setAction(e.target.value)} />
        <br />
        <div style={{textAlign:'center'}}>
        <button style={{marginTop:'10px'}} onClick={handleAction}>Send Action To Store</button>
        </div>
    </div>
  )
}

export default Store