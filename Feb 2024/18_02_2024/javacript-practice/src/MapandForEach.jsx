import React, { useState } from 'react';

function MapandForEach() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const mapMethod = () => {
    const multiply = input.map((num) => num * 2);
    setData(multiply);
  };

  const forEachMethod = () => {
    const multiply = [];
    input.forEach((num) => {
      multiply.push(num * 2);
    });
    setData(multiply);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map and forEach</h1>
      <div style={{ alignItems: 'center' }}>
        <label htmlFor="data">Enter Input with ',' Separated: </label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value.split(','))}/>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{ margin: '5px' }} onClick={mapMethod}>
            Map
          </button>
          <button onClick={forEachMethod}>forEach</button>
        </div>
        <div style={{ marginTop: '3rem', fontWeight: 'bold' }}>
          <p>The Output:{' '}{data.length > 0 ? data.join(', ') : 'No output yet'}</p>
          <p>Type of output: {data.length>0? typeof(data):'No Output'}</p>
        </div>
      </div>
    </div>
  );
}

export default MapandForEach;
