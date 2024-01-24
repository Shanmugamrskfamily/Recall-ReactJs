import React from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  return (
    <div>
      <h2>Child</h2>
      <GrandChild names={props.parrent} grandChildMsg={props.grandChildMsg} />
    </div>
  );
}

export default Child;