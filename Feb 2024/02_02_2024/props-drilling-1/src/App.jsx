// App.jsx
import React from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4 text-center">Props Drilling App</h1>
      <div className='flex justify-center flex-row '>
        <div className='border-4 border-lime-500'>
      <Parent/>
      </div>
      </div>
    </div>
  );
}

export default App;
