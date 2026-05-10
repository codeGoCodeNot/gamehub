import ErrorPage from "@/pages/error-page";
import GameDetailsPage from "@/pages/game-details-page";
import HomePage from "@/pages/home-page";
import Layout from "@/pages/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
