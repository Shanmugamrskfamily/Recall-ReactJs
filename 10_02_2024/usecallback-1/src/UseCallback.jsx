import React, { useCallback, useState } from 'react'

const UseCallback = () => {

    const [count,setCount]=useState(0);

    const handleIncrement=useCallback(()=>{
        setCount(count+1);
        console.log('Count Increased: ',count);
    },[]);
    
    const handleDecrement=()=>{
        setCount(count-1);
        
    };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} style={{margin:"10px"}}>Increse Count</button> <button onClick={handleDecrement} >Decrese Count</button>
    </div>
  )
}

export default UseCallback
