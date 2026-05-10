import HomePage from "@/learning-react-routing/home-page";
import UsersPage from "@/learning-react-routing/user-page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UsersPage /> },
]);

export default router;
