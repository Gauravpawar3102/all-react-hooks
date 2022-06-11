import React, { useState } from 'react';

function UseState2() {
  const [state, setState] = useState('');

  let handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="type to search" onChange={handleChange} />
      <div>{state}</div>
    </div>
  );
}

export default UseState2;
