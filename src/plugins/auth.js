const TOKEN_NAME = 'authToken'

export function setAuthToken(token) {
  localStorage.setItem(TOKEN_NAME, token);
}

export function getAuthToken() {
  return localStorage.getItem(TOKEN_NAME)
}

export function isAuthenticated() {
  const token = getAuthToken();
  return !!token;
}
