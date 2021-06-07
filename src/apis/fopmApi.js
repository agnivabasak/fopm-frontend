import axios from "axios";
//import cookies from "react-cookies";

const customAxios = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "http://localhost:8000/",
});
/*
customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise(() => {
      console.log(
        "interceptor working ",
        error.response.data.code,
        error.response,
        error.config
      );
      //code: "token_not_valid"
      const refreshToken = cookies.load("refresh");
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        error.response.data.code &&
        error.response.data.code === "token_not_valid" &&
        refreshToken
      ) {
        originalRequest._retry = true;
        const response = fetch(
          "http://localhost:8000/api/auth/login/refresh/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh: refreshToken,
            }),
          }
        )
          .then((res) => res.json())
          .then((res) => {
            cookies.save("token", res.access);
            return axios();
          })
          .catch((err) => {
            Promise.reject(err);
          });
        Promise.resolve(response);
      }
      Promise.reject(error);
    });
  }
);*/

export default customAxios;
