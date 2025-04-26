// export const getNavList

import { Axios } from "axios";

const request = new  Axios({
  baseURL: "https://www.jiancailvtan.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

request.interceptors.response.use(
  (config) => {
    config.data = JSON.parse(config.data) || {};
    return config;
  })

export default request