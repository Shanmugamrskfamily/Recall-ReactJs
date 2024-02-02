// GrandChild.jsx
import React, { useState } from 'react';

function GrandChild(props) {
  const [msg, setMsg] = useState('');
  

  const handleSendToParent = () => {
    props.msgFromGrandChildToParent(msg);
  }

  const handleSendToChild = () => {
    props.msgFromGrandChildToChild(msg);
  }

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h1 className="text-lg font-semibold mb-2">Grand Child</h1>
      <p className="mb-2">Message Received From Parent: {props.msgtoGrandChildFromParent}</p>
      <p className="mb-2">Message Received From Child: {props.msgToGrandChildFromChild}</p>
      <div className="flex mb-2">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="border rounded-md py-1 px-2 mr-2"
        />
        <button onClick={handleSendToParent} className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2">Send To Parent</button>
        <button onClick={handleSendToChild} className="bg-yellow-500 text-white px-4 py-1 rounded-md">Send To Child</button>
      </div>
    </div>
  );
}

export default GrandChild;
