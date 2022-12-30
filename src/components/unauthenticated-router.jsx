import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";
import RouteNotFound from "./route-not-found";
import Bond from "../pages/bond";
import Login from "../pages/login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				index: true,
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "/bond",
		element: <Header />,
		children: [
			{
				index: true,
				path: "",
				element: <Bond />,
			},
		],
	},
	{
		path: "/login",
		element: <Header />,
		children: [
			{
				index: true,
				path: "",
				element: <Login />,
			},
		],
	},
	{
		path: "/signup",
		element: <Header />,
		children: [
			{
				index: true,
				path: "",
				element: <Login />,
			},
		],
	},
	{
		path: "/*",
		element: <Header />,
		children: [
			{
				index: true,
				path: "*",
				element: <RouteNotFound />,
			},
		],
	},
]);

function UnauthenticatedRouter() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default UnauthenticatedRouter;
