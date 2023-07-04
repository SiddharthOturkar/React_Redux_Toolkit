import React, { useState, useEffect, useReducer } from "react";

function hooksTrial() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   console.log("Hello World");
  // });
  return (
    <div>
      <h1> This is useEffect</h1>
      <button>Click Me</button>
      <h3>{count}</h3>
    </div>
  );
}

export default hooksTrial;
