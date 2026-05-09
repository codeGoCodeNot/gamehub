import useAuth from "../hooks/use-auth";

const Auth = () => {
  const { auth, authDispatch } = useAuth();

  if (auth) {
    return (
      <div className="flex gap-x-2">
        <span>{auth}</span>
        <a href="#" onClick={() => authDispatch({ type: "LOGOUT" })}>
          Log out
        </a>
      </div>
    );
  }

  return (
    <div>
      <a
        href="#"
        onClick={() =>
          authDispatch({ type: "LOGIN", username: "Johnsen Berdin" })
        }
      >
        Log in
      </a>
    </div>
  );
};

export default Auth;
