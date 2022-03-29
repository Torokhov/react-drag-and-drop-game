import React from "react";
import { Store } from "../../store";
import { WithStore } from "../../types";

export const StoreContext = React.createContext<WithStore>({
  store: undefined,
});

interface Props {
  children: React.ReactNode;
  store: Store;
}

export const StoreProvider = ({ children, store }: Props) => (
  <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
);
