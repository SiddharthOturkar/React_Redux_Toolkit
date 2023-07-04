import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store";
import App from "./App";
// import { persistedStore } from "./store/index";
// import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistedStore}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
