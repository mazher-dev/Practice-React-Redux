import React, { useState } from "react";

function States() {
  const [count, setCount] = useState(0); // Declare state

  const increment = () => setCount(count + 1); // Update state
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>

  );
  
}
export default States;
