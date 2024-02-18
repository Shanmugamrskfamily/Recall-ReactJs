import React, { useState } from 'react';

function PrintStar() {
  const [star, setStar] = useState('');
  const [input, setInput] = useState('');

  const printA_Z = () => {
    if (parseInt(input) <= 0 || parseInt(input) !== parseFloat(input)) {
      alert('Enter a valid positive integer!');
      return;
    }
    let pattern = '';
    for(let i=1;i<=parseInt(input);i++){
        for(let j=1;j<=i;j++){
            pattern+='*';
        }
        pattern+='\n';
    }
    setStar(pattern);
  };

  const printZ_A = () => {
    if (parseInt(input) <= 0 || parseInt(input) !== parseFloat(input)) {
      alert('Enter a valid positive integer!');
      return;
    }
    let pattern = '';
    for (let i = parseInt(input); i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        pattern += '*';
      }
      pattern += '\n';
    }
    setStar(pattern);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Print Star</h1>
      <label htmlFor="star">Enter How Many Stars: </label>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={printA_Z}>Print Star A-Z</button>{' '}
        <button onClick={printZ_A}>Print Star Z-A</button>
      </div>
      <pre style={{marginTop:'3rem' }}>{star}</pre>
    </div>
  );
}

export default PrintStar;
