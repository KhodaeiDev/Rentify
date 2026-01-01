import { useMutation } from "@tanstack/react-query";
import { setToken } from "../lib/token";
import { loginVerify } from "../services/auth.api";

export function useLoginVerify(onSuccess) {
  return useMutation({
    mutationFn: loginVerify,
    onSuccess: (res) => {
      const accessToken = res.data?.data?.accessToken;
      if (accessToken) {
        setToken(accessToken);
      }
      onSuccess?.(res.data);
    },
  });
}
