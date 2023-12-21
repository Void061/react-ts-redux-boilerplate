import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://icanhazdadjoke.com",
});

// Response interceptor for user if is AUTH
/*customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);*/

export const checkForUnauthorizedResponse = (error: any, thunkAPI: any) => {
  if (error.response.status === 401) {
    // thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
};

export default customFetch;
