import { useMutation } from "@tanstack/react-query";
import { loginStart } from "./../services/auth.api";

export function useLoginStart(onSuccess) {
  return useMutation({
    mutationFn: loginStart,
    onSuccess,
  });
}
