type Login = {
  type: "LOGIN";
  username: string;
};

type Logout = {
  type: "LOGOUT";
};

export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default authReducer;
