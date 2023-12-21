import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.value += payload;
    },
  },
});

// Export reducers
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export slice
export default counterSlice.reducer;
