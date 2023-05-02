import axios, { AxiosError } from "axios";

const appAxios = axios.create();

appAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("err", error);
    // throw error;
    return Promise.reject(error);
  }
);

export { appAxios };
