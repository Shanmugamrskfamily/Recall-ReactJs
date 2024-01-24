import React,{useState,useRef} from 'react'

function Count() {
const [count,setCount]=useState(0);
const countRef=useRef(0);
const previousCount=useRef(0);

const handleClick=()=>{
    previousCount.current=countRef.current;
    countRef.current+=1;
    setCount(count+1);
    console.log('Current Ref: ',countRef.current);
    console.log('Previous Ref: ',previousCount.current);   
}
  return (
    <div>
        <h1>Check Count</h1>
        <p>Current Count by useRef: {countRef.current}</p>
        <p>Previous Count by useRef: {previousCount.current}</p>
        <p>Current Count by useState: {count}</p>
        <button onClick={handleClick}>Increase Count</button>
    </div>
  )
}

export default Count