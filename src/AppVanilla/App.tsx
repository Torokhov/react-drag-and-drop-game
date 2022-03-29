import React from "react";
import { GameBoard } from "./components/GameBoard";
import { StoreProvider } from "../providers/StoreProvider";
import { Store } from "../store";
const store = new Store();

export function App() {
  return (
    <StoreProvider store={store}>
      <GameBoard />
    </StoreProvider>
  );
}
