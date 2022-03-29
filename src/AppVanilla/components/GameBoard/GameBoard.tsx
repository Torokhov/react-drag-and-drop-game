import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { Card } from "../Card";
import { Box } from "../Box";
import { useStore } from "../../../providers/StoreProvider";

import "./GameBoard.css";
import { Position } from "../../../types";

export const GameBoard = observer(() => {
  const store = useStore();
  const onDrop = (color: string, position: Position) =>
    store?.setCardPosition(color, position);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDragover = (e: Event) => {
      e.preventDefault();
    };

    ref.current?.addEventListener("dragover", handleDragover);
  }, []);

  return (
    <div ref={ref} className={"board"}>
      {store?.getBoxes.map((box, index) => (
        <Box
          key={index}
          color={box.color}
          position={box.position}
          onDrop={onDrop}
        />
      ))}
      {store?.getCards.map((card, index) => (
        <Card key={index} color={card.color} position={card.position} />
      ))}
    </div>
  );
});
