import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "iws",
//   storage
// };

// const persistAuthReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    // users: persistAuthReducer
    users: userSlice
  }
});

export default store;

// export const persistedStore = persistStore(store);
