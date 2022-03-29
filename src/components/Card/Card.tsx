import React from "react";
import "./Card.css";
import { useDrag } from "react-dnd";

interface Props {
  title?: string;
  color: string;
}

export const Card = ({ color, title }: Props) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "CARD",
    item: { id: 1 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (draggedItem, monitor) => {
      console.log(draggedItem);
      console.log(monitor.getDropResult());
    },
  }));

  if (collected.isDragging) {
    return (
      <div
        ref={dragPreview}
        style={{ backgroundColor: "purple" }}
        className={"card"}
      >
        {title}
      </div>
    );
  }
  return (
    <div ref={drag} style={{ backgroundColor: color }} className={"card"}>
      {title}
    </div>
  );
};
