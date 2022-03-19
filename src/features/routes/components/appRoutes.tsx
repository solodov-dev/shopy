import Home from "pages/components/home";
import React from "react";
import { Route, Routes as BrowserRoutes, Navigate } from "react-router-dom";
import { map } from "rxjs";
import { ajax } from "rxjs/ajax";
import useObservable from "utils/hooks/useObservable";
import Routes from "../constants/routes";

const HistoryComponent = React.lazy(
  () => import("features/history/components/history")
);
const CartComponent = React.lazy(() => import("pages/components/cart"));

export default function Pages() {
  const [history, setHistory] = useObservable(
    ajax
      .getJSON<Record<string, any>>(`${window.location.origin}/data.json`)
      .pipe(map((response) => response.data.items))
  );

  return (
    <BrowserRoutes>
      <Route path={Routes.HOME} element={<Home />} />
      <Route
        path={Routes.HISTORY}
        element={<HistoryComponent history={history} />}
      />
      <Route path={Routes.CART} element={<CartComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </BrowserRoutes>
  );
}
