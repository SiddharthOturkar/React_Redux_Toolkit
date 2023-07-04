import React from "react";
import CompB from "./CompB";

const val = React.createContext();

function CompA() {
  return (
    <val.Provider value={"Trial Message"}>
      <CompB />
    </val.Provider>
  );
}

export default CompA;
export { val };
