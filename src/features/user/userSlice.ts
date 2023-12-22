import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunks";

const initialState: userState = {
  user: null,
  isLoading: false,
};

export const loginAuth = createAsyncThunk("auth/login", async (data : loginData, thunkAPI) => {
  return loginThunk(data, "/auth/login", thunkAPI);
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET JOKE
      .addCase(loginAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Export slice
export default userSlice.reducer;
