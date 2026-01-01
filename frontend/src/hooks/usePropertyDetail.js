import { useQueries } from "@tanstack/react-query";
import { getPropertyById } from "../services/property.api";

export default function usePropertyDetail(id) {
  return useQueries({
    queryKey: ["property", id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    retry: 1,
    staleTime: 60_000,
  });
}
