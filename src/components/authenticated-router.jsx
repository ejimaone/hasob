import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import AuthHeader from "./auth-header";
import RouteNotFound from "./route-not-found";
import Bond from "../pages/bond";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthHeader />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/*",
    element: <AuthHeader />,
    children: [
      {
        index: true,
        path: "*",
        element: <RouteNotFound />,
      },
    ],
  },
  {
    path: "/bond",
    element: <AuthHeader />,
    children: [
      {
        index: true,
        path: "",
        element: <Bond />,
      },
    ],
  },
  {
    path: "/cart",
    element: <AuthHeader />,
    children: [
      {
        index: true,
        path: "",
        element: <Cart />,
      },
    ],
  },
]);

function AuthenticatedRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AuthenticatedRouter;
