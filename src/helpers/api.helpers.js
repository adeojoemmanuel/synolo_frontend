import axios from "axios";

export const API = axios.create({
  baseURL: "https://synolo.herokuapp.com/"
  // baseURL: "http://localhost:4000/"
});

API.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user_acess_passcode');
  config.headers.Authorization = token ? `${token}` : '';
  return config;
});