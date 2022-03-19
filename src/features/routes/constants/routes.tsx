import Home from "pages/components/home";
import History from "pages/components/history";
import Cart from "pages/components/cart";

const menu = [
  {
    path: "/",
    title: "home",
    element: <Home />,
  },
  {
    path: "/history",
    title: "history",
    element: <History />,
  },
  {
    path: "/cart",
    title: "cart",
    element: <Cart />,
  },
];

export default menu;
