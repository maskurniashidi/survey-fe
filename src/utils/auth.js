export function useAuth() {
  return localStorage.getItem("token") && localStorage.getItem("user") ? true : false;
}
