import { useMutation } from "@tanstack/react-query";
import { setToken } from "../lib/token";
import { registerVerify } from "../services/auth.api";

export function useRegisterVerify(onSuccess) {
  return useMutation({
    mutationFn: registerVerify,
    onSuccess: (res) => {
      console.log("register verify response ===>", res.data);

      const accessToken = res.data?.data?.accessToken;

      if (accessToken) {
        setToken(accessToken);
        console.log("token saved:", accessToken.slice(0, 20) + "...");
        console.log("🔥 useRegisterVerify LOADED");
      } else {
        console.warn("no accessToken in response:", res.data);
      }

      // const token = extractToken(res.token);
      // if (token) {
      //   setToken(token);
      // }
      onSuccess?.(res.data);
      console.log("🔥 useRegisterVerify onSuccess HIT");
    },
  });
}
