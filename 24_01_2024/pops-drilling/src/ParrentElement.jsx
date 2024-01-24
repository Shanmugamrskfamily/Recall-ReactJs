import React, { useState } from 'react'
import ChildElement from './ChildElement'

function ParrentElement() {
  const names=['SHANMUGAM','Kishore','Rajaram'];
  const [data,setData]=useState('');
    const handleDataFromChild=(grandChild)=>{
      setData(grandChild);
    }

  return (
    <div><h1>Parrent Element</h1>
      <p>Data From Child: <b>{data}</b></p>
        <b>List Of Names</b>
        <ChildElement names={names} grandChild={handleDataFromChild}/>
        
    </div>
  )
}

export default ParrentElement