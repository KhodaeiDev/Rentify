import axios from "axios";
import { getToken } from "./token";

const baseURL = import.meta.env.DEV ? "/api" : import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
