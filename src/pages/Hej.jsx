import React, { useState } from 'react';


const Hej = () => {

    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
    }
export default Hej




