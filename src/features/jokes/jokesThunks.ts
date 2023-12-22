import { customFetch } from "../../utils/axios";

export const getJokeThunk = async (url: string, thunkAPI: any) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error while retriving joke");
  }
};
