import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://icanhazdadjoke.com",
});

const loginFetch = axios.create({
  baseURL: "https://dummyjson.com",
});

// Response interceptor for user if is AUTH
customFetch.interceptors.request.use(
  (config : InternalAxiosRequestConfig<any>) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkForUnauthorizedResponse = (error: AxiosError, thunkAPI: any) => {
  if (error?.response?.status === 401) {
    // thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
};

export { customFetch , loginFetch};
