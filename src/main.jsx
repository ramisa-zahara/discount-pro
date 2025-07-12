import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Header from "./Components/Header.jsx";
import AuthProviders from "./Components/Providers/AuthProviders.jsx";
import Register from "./Components/Register.jsx";
import Home from "./Components/Home.jsx";
import Brands from "./Components/Brands.jsx";
import My_Profile from "./Components/My_Profile.jsx";
import About_dev from "./Components/About_dev.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import { Toaster } from "sonner";
import BrandDetails from "./Components/BrandDetails.jsx";
import UpdateInfo from "./Components/UpdateInfo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <My_Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/updateInfo",
        element: (
          <PrivateRoute>
            <UpdateInfo></UpdateInfo>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutdev",
        element: <About_dev />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "*",
    element: <h2 className="flex justify-center items-center">Error 404</h2>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </AuthProviders>
  </StrictMode>
);
