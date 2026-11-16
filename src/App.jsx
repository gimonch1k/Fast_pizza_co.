import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "menu",
        Component: Menu,
        loader: menuLoader,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "order/new",
        Component: CreateOrder,
      },
      {
        path: "order/:orderId",
        Component: Order,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
