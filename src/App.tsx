import React from "react";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { StoreProvider } from "./providers/StoreProvider";
import { store } from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <GameBoard />
    </StoreProvider>
  );
}

export default App;
