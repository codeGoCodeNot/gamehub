import { useReducer } from "react";
import authReducer from "../../reducer/auth-reducer";
import AuthContext from "../auth-context";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
