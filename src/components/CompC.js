import React, { useContext } from "react";
import { val } from "./CompA";

function CompC() {
  const con = useContext(val);
  return (
    <div>
      <h1> This is CompC Component {con}</h1>
    </div>
  );
}

export default CompC;
