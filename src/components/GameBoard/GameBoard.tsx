import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Card } from "../Card";
import { Box } from "../Box";
import { StoreContext } from "../../providers/StoreProvider/StoreProvider";

import "./GameBoard.css";

export const GameBoard = observer(() => {
  const { store } = useContext(StoreContext);
  return (
    <div className={"board"}>
      {store?.getBoxes.map((box, index) => (
        <Box key={index} color={box.color} position={box.position} />
      ))}
      {store?.getCards.map((card, index) => (
        <Card key={index} color={card.color} position={card.position} />
      ))}
    </div>
  );
});
