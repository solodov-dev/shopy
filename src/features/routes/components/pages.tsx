import getHistory from "features/history/model/getHistory";
import { PurchasedItem } from "features/history/model/schema";
import Home from "features/landing/components/home";
import { ShoppingList } from "features/shop/model/schema";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Route, Routes as BrowserRoutes, Navigate } from "react-router-dom";
import useObservable from "utils/hooks/useObservable";
import Routes from "../constants/routes";

const HistoryComponent = React.lazy(
  () => import("features/history/components/history")
);
const ShopComponent = React.lazy(() => import("features/shop/components/shop"));

export type SetLocalHistory = Dispatch<SetStateAction<PurchasedItem[]>>;
export type SetShoppingList = React.Dispatch<
  React.SetStateAction<ShoppingList>
>;

export default function Pages() {
  const history = useObservable(getHistory);
  const [localHistory, setLocalHistory] = useState<PurchasedItem[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingList>({});

  useEffect(() => history && setLocalHistory(history), [history]);

  return (
    <BrowserRoutes>
      <Route path={Routes.HOME} element={<Home />} />
      <Route
        path={Routes.HISTORY}
        element={<HistoryComponent history={localHistory} />}
      />
      <Route
        path={Routes.SHOP}
        element={
          <ShopComponent
            setLocalHistory={setLocalHistory}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </BrowserRoutes>
  );
}
