import React from "react";
import { useDrop } from "react-dnd";

import "./Box.css";
import { Box, Card } from "../../types";

interface Props extends Box {
  title?: string;
}

export const BoxComponent = ({ title, color, position }: Props) => {
  const [_, drop] = useDrop<Card, Card>(() => ({
    accept: "CARD",
    drop: (item) => {
      return { ...item, position };
    },
    canDrop: (item) => item.color === color,
  }));

  return (
    <div
      ref={drop}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className={"box"}
    >
      {title}
    </div>
  );
};
