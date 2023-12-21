import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJokeThunk } from "./jokesThunks";



const initialState: jokesState = {
  joke: null,
  isLoading: false,
};

export const getJoke = createAsyncThunk(
  "joke/getOne",
  async ( thunkAPI) => {
    return getJokeThunk("/slack", thunkAPI);
  }
);

export const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET JOKE
      .addCase(getJoke.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJoke.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.joke = payload;
      })
      .addCase(getJoke.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Export slice
export default jokeSlice.reducer;
