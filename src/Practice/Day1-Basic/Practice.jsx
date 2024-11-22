import React from "react";
import { useState } from "react";

function Practice() {
  const [count, setcount] = useState(0);

  const increament = () => setcount(count + 1);
  const decreament = () => setcount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increament} style={{ margin: "5px" }}>
        Increase
      </button>
      <button onClick={decreament} style={{ margin: "5px" }}>
        Decrease
      </button>
    </div>
  );
}

function Welcome({ name = "Guest" }) {
    return <h1>Welcome, {name}!</h1>;
}



export { Practice, Welcome };


