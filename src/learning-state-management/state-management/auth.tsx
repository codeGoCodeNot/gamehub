import { useReducer, useState } from "react";
import authReducer from "./reducer/auth-reducer";

const Auth = () => {
  const [user, dispatch] = useReducer(authReducer, "");

  if (user) {
    return (
      <div className="flex gap-x-2">
        <span>{user}</span>
        <a href="#" onClick={() => dispatch({ type: "LOGOUT" })}>
          Log out
        </a>
      </div>
    );
  }

  return (
    <div>
      <a
        href="#"
        onClick={() => dispatch({ type: "LOGIN", username: "Johnsen Berdin" })}
      >
        Log in
      </a>
    </div>
  );
};

export default Auth;
