import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "destination",
        element: <DestinationPage />,
      },
      {
        path: "crew",
        element: <CrewPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
