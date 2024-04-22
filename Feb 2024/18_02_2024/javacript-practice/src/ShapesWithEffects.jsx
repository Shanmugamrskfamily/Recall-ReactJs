import React from 'react'
import './ShapesWithEffects.css'

function ShapesWithEffects() {

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Shapes With Effects</h1>
        <div className='container'>
            <p className='circle'></p>
            <p className='square'></p>
            <p className='rectangle'></p>
            <p className='triangle'></p>
        </div>
    </div>
  )
}

export default ShapesWithEffects