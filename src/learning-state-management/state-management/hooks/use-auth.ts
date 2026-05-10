import useAuthStore from "../store/auth-store";

const useAuth = () => {
  const username = useAuthStore((s) => s.username);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);

  return { username, login, logout };
};

export default useAuth;
