import Axios from "axios";

export const instance = Axios.create({
  baseURL: window.location.origin,
  method: "get",
  headers: {
    Authorization: "",
    language: "",
    platform: ""
  },
  params: {},
  data: {},
  responseType: "json",
  timeout: 5 * 60 * 1000,
  withCredentials: true
});