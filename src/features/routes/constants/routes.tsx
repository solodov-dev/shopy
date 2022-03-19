import Home from "pages/components/home";
import History from "pages/components/history";
import Cart from "pages/components/cart";

export enum Routes {
  HOME = "home",
  HISTORY = "history",
  CART = "cart",
}

const menu = {
  [Routes.HOME]: { path: "/", element: <Home /> },
  [Routes.HISTORY]: { path: "/history", element: <History /> },
  [Routes.CART]: { path: "/cart", element: <Cart /> },
};

export default menu;
