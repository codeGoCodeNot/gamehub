import { createContext, type Dispatch } from "react";
import type { AuthAction } from "../reducer/auth-reducer";

type AuthContextType = {
  auth: string;
  authDispatch: Dispatch<AuthAction>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
