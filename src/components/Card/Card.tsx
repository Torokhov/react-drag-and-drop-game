import React from "react";
import "./Card.css";
import { useDrag } from "react-dnd";
import { Card, Position } from "../../types";

interface Props extends Card {
  title?: string;
  onDrop: (color: string, position: Position) => void;
}

export const CardComponent = ({ color, position, title, onDrop }: Props) => {
  const [_, drag] = useDrag<Card, Card>(() => ({
    type: "CARD",
    item: { color, position },

    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        onDrop(dropResult.color, dropResult.position);
      }
    },
  }));

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: color,
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      className={"card"}
    >
      {title}
    </div>
  );
};
