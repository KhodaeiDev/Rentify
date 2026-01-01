import { useMutation } from "@tanstack/react-query";
import { registerVerify } from "../services/auth.api";
import { useAuth } from "../context/AuthContext";

export function useRegisterVerify(onSuccess) {
  const auth = useAuth();

  return useMutation({
    mutationFn: registerVerify,
    onSuccess: (res) => {
      console.log("register verify response ===>", res.data);

      const accessToken =
        res.data?.data?.accessToken ?? res.data?.accessToken ?? null;

      const user = res.data?.data?.user ?? res.data?.user ?? null;

      if (accessToken) {
        auth.setSession({ accessToken, user });
        console.log("token saved:", accessToken.slice(0, 20) + "...");
        console.log("🔥 useRegisterVerify LOADED");
      } else {
        console.warn("no accessToken in response:", res.data);
      }

      onSuccess?.(res.data);
      console.log("🔥 useRegisterVerify onSuccess HIT");
    },
  });
}
