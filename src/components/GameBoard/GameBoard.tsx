import React from "react";
import { Card } from "../Card";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Box } from "../Box";

export const GameBoard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Card color={"red"} />
        <Box />
      </div>
    </DndProvider>
  );
};
