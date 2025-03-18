"use client";
import { configureStore } from "@reduxjs/toolkit";

import settingSlice from "./slices/settingSlice";
import citySlice from "./slices/citySlice";

import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { combineReducers } from "redux";

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  settings: settingSlice,
  citySlice: citySlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
