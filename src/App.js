import "./styles.css";
import HooksTrial from "./components/hooksTrial";
import CounterCode from "./components/CounterCode";
import CompA from "./components/CompA";
import UserDetails from "./components/UserDetails";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      <HooksTrial />
      <CounterCode />
      <CompA />
      <UserDetails />
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
