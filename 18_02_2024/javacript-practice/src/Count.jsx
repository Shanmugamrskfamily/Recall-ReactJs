import React, { useState } from 'react'

function Count() {

    const [count,setCount]=useState(0);

    const increase=()=>{
        setCount(count+1);
    }

    const decrease=()=>{
        setCount(count-1);
    }


  return (
    <div>
        <h1 style={{textAlign:'center'}}>Count Managment</h1>
        <div style={{textAlign:'center'}}>
            <p style={{fontWeight:'bold'}}>Curent Count: {count}</p>
            <div>
                <button style={{marginRight:'1rem'}} onClick={increase}>Increase</button>
                <button onClick={decrease} >Decrease</button>
            </div>
        </div>
    </div>
  )
}

export default Count