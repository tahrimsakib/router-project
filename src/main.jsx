import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Contract from "./Pages/Contract.jsx";
import RootLayout from "./Layout/RootLayout.jsx";
import Me from "./Pages/me.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./Data.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contract",
        Component: Contract,
      },
      {
        path: "/me",
        Component: Me,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
