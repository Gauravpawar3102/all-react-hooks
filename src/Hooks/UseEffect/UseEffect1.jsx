import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function UseEffect1() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('Api Was Called');
      });
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default UseEffect1;
