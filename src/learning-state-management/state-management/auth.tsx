import { useContext } from "react";
import AuthContext from "./context/auth-context";

const Auth = () => {
  const { auth, authDispatch } = useContext(AuthContext);

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
