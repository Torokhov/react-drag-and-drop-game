import React from "react";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { StoreProvider } from "../providers/StoreProvider";
import { Store } from "../store";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const store = new Store();

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <StoreProvider store={store}>
        <GameBoard />
      </StoreProvider>
    </DndProvider>
  );
}
