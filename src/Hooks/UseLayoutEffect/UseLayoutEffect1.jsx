import React, { useRef, useEffect, useLayoutEffect } from 'react';

function UseLayoutEffect1() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'HELLO';
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} value="PEDRO" />
    </div>
  );
}

export default UseLayoutEffect1;
