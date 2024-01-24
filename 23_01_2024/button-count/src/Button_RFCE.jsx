import React from 'react'
import { useState } from 'react';

function Button_RFCE() {
    let [count,setCount]=useState(0);
const increase=()=>{
    setCount(count+1);
    console.log(`Use State Result: ${count}`);
}
const decrese=()=>{
    setCount(count-1);
    console.log(`Use State Result: ${count}`);
}
  return (
    <div>
        The Count:{count} <br />
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrese}>Decrese Count</button>
    </div>
  )
}

export default Button_RFCE