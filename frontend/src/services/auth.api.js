import axios from "./../lib/axios";

export const registerStart = (data) => {
  return axios.post("/auth/register/start", data);
};

export const registerVerify = (data) => {
  return axios.post("/auth/register/verify", data);
};

export const loginStart = (data) => {
  return axios.post("/auth/login/start", data);
};

export const loginVerify = (data) => {
  return axios.post("/auth/login/verify", data);
};
