// Child.jsx
import React, { useState } from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  const [type, setType] = useState('');
  const [toGrandChild, setToGranChild] = useState('');
  const [fromGrandChild, setFromGrandChild] = useState('');

  const handleFromGrandChildToChild = (msgFromGrandChildToChild) => {
    setFromGrandChild(msgFromGrandChildToChild);
  }

  const handleSendToParent = () => {
    props.msgToParentFromChild(type);
  }

  const handleSendToGrandChild = () => {
    setToGranChild(type);
  }

  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h1 className="text-xl font-semibold mb-2">Child Element</h1>
      <p className="mb-2">Message From Parent: {props.msgTochildfromParent}</p>
      <p className="mb-2">Message From Grand Child: {fromGrandChild}</p>
      <div className="flex mb-2">
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-md py-1 px-2 mr-2"
        />
        <button onClick={handleSendToParent} className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2">Send To Parent</button>
        <button onClick={handleSendToGrandChild} className="bg-green-500 text-white px-4 py-1 rounded-md">Send To Grand Child</button>
      </div>
      <GrandChild  msgtoGrandChildFromParent={props.msgtoGrandChildFromParent} msgFromGrandChildToChild={handleFromGrandChildToChild} msgFromGrandChildToParent={props.msgFromGrandChildToParent} msgToGrandChildFromChild={toGrandChild} />
    </div>
  );
}

export default Child;

