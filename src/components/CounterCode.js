// import { useState } from "react";

// function CounterCode() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>This is useReducer</h1>
//       <button onClick={() => setCount(count + 1)}>incrment</button>
//       <button onClick={() => setCount(count - 1)}>decrment</button>
//       <h2>{count}</h2>
//     </div>
//   );
// }
// export default CounterCode;

import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else {
    return state - 1;
  }
  // console.log(state, action);
  // return state;
};
function CounterCode() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>This is useReducer</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>incrment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrment</button>
      <h2>{state}</h2>
    </div>
  );
}
export default CounterCode;
