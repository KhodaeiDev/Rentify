import { useQueries } from "@tanstack/react-query";
import { getProperties } from "../services/property.api";

export default function useProperty(params) {
  return useQueries({
    queryKey: ["properties", params],
    queryFn: () => getProperties(params),
    staleTime: 60_000,
    retry: 1,
  });
}
