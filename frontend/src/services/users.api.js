import axiosInstance from "../lib/axios";

export async function getMe() {
  const { data } = await axiosInstance.get("/users/me");
  return data;
}
