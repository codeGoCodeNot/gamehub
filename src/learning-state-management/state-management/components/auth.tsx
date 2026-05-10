import useAuthStore from "../store/auth-store";

const Auth = () => {
  const { login, logout, username } = useAuthStore();

  if (username) {
    return (
      <div className="flex gap-x-2">
        <span>{username}</span>
        <a href="#" onClick={() => logout()}>
          Log out
        </a>
      </div>
    );
  }

  return (
    <div>
      <a href="#" onClick={() => login("Johnsen Berdin")}>
        Log in
      </a>
    </div>
  );
};

export default Auth;
