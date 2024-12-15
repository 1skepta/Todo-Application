import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";
import themeReducer from "./themeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoSlice);

const store = configureStore({
  reducer: {
    todos: persistedReducer,
    theme: themeReducer,
  },
});

export const persistor = persistStore(store);
export default store;
