import { createContext, useContext, useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getToken, setToken, clearToken } from "../lib/token";
import { getMe } from "../services/users.api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const qc = useQueryClient();

  const [tokenState, setTokenState] = useState(() => getToken() || null);
  const [user, setUser] = useState(null);

  const meQuery = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!tokenState,
    retry: 0,
    staleTime: 60_000,
    onSuccess: (res) => {
      // API ممکنه data داخل data داشته باشه
      const payload = res?.data ?? res;
      setUser(payload);
    },
    onError: (err) => {
      const status = err?.response?.status;
      if (status === 401) {
        clearToken();
        setTokenState(null);
        setUser(null);
        qc.removeQueries({ queryKey: ["me"] });
      }
    },
  });

  const setSession = ({ accessToken, user: u }) => {
    if (!accessToken) return;

    setToken(accessToken);
    setTokenState(accessToken);

    if (u) setUser(u);
    qc.invalidateQueries({ queryKey: ["me"] });
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
    setUser(null);
    qc.removeQueries({ queryKey: ["me"] });
  };

  const value = useMemo(
    () => ({
      token: tokenState,
      user,
      isAuthenticated: !!tokenState,
      isAuthLoading: !!tokenState && meQuery.isPending,
      setSession,
      logout,
      refetchMe: meQuery.refetch,
    }),
    [tokenState, user, meQuery.isPending, meQuery.refetch]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
