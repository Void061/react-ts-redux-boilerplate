import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import jokesSlice from "./features/jokes/jokesSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    joke: jokesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
