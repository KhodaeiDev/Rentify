import api from "./api";

export const healthcheck = () => api.get("/");
