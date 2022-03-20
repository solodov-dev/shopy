import Home from "features/landing/components/home";
import React from "react";
import { Route, Routes as BrowserRoutes, Navigate } from "react-router-dom";
import Routes from "../constants/routes";

const HistoryComponent = React.lazy(() => import("features/history/components/history"));
const CartComponent = React.lazy(() => import("features/cart/components/cart"));

export default function Pages() {

  return (
    <BrowserRoutes>
      <Route path={Routes.HOME} element={<Home />} />
      <Route path={Routes.HISTORY} element={<HistoryComponent/>} />
      <Route path={Routes.CART} element={<CartComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </BrowserRoutes>
  );
}
