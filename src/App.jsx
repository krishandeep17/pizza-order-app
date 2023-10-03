import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./features/cart/Cart";
import Menu, { menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // When a route does not have an `errorElement`, errors will bubble up through parent routes.
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // `loader` function provide data to the route element before it renders
        errorElement: <Error />, // it renders when exceptions are thrown in loaders, actions, or component rendering
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
