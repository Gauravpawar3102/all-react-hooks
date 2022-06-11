import React, { useRef } from 'react';

function UseRef1() {
  const inputRef = useRef(null);

  const handleChange = () => {
    inputRef.current.value = '';
    // inputRef.current.focus();
    // console.log('Namaste');
  };
  return (
    <div>
      <h1>Gaurav</h1>
      <input
        type="text"
        placeholder="Enter
        the Name "
        ref={inputRef}
      />
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}

export default UseRef1;
