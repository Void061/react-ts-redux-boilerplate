import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunks";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
const initialState: userState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
};

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (data: loginData, thunkAPI) => {
    return loginThunk(data, "/auth/login", thunkAPI);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      // GET JOKE
      .addCase(loginAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAuth.fulfilled, (state, { payload }) => {
        const user: User = {
          username: payload.username,
          email: payload.email,
          image: payload.image,
          gender: payload.gender,
          token: payload.token,
        };

        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
      })
      .addCase(loginAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logoutUser } = userSlice.actions;
// Export slice
export default userSlice.reducer;
