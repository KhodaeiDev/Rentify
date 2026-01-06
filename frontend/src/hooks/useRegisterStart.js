import { useMutation } from "@tanstack/react-query";
import { registerStart } from "../services/auth.api";

export function useRegisterStart(onSuccess) {
  return useMutation({
    mutationFn: registerStart,
    onSuccess,
  });
}
