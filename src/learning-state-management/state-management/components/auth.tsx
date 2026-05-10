import useAuth from "../hooks/use-auth";

const Auth = () => {
  const { username, login, logout } = useAuth();

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
