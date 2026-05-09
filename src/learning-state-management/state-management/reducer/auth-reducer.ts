type Login = {
  type: "LOGIN";
  username: string;
};

type Logout = {
  type: "LOGOUT";
};

type AuthAction = Login | Logout;

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
