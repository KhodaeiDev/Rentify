import axiosInstance from "../lib/axios";

export async function getProperties(params) {
  const { data } = await axiosInstance.get("/property", { params });
  return data;
}

export async function getPropertyById(id) {
  const { data } = await axiosInstance.get(`/property/${id}`);
  return data;
}
