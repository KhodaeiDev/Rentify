const TOKEN_KEY = "rentify_token";

export function extractToken(response) {
  if (!response) return null;

  return (
    response.token ||
    response.accessToken ||
    response?.data?.token ||
    response?.data?.accessToken ||
    null
  );
}

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
