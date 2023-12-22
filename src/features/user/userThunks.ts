import { loginFetch } from "../../utils/axios";

export const loginThunk = async (data : loginData , url: string, thunkAPI: any) => {
  try {
    const resp = await loginFetch.post(url, data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Invalid credentials.");
  }
};
