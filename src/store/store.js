import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoSlice);

const store = configureStore({
  reducer: persistReducer,
});

export const persistor = persistStore(store);
export default store;
