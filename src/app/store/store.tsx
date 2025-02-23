// "use client";
// import { configureStore } from "@reduxjs/toolkit";
// import settingSlice from "./slices/settingSlice";
// import locationSlice from "./slices/locationSlice";

// export const store = configureStore({
//   reducer: {
//     settings: settingSlice,
//     locationsetuser: locationSlice,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

"use client";
import { configureStore } from "@reduxjs/toolkit";

import settingSlice from "./slices/settingSlice";

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

let persistConfig = {
  key: "root",
  version: 1,
  storage,
};
let rootReducer = combineReducers({
  settings: settingSlice,
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
// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch;
