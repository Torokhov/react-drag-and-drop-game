import React from "react";
import "./Card.css";
import { useDrag } from "react-dnd";
import { Card } from "../../types";

interface Props extends Card {
  title?: string;
}

export const CardComponent = ({ color, position, title }: Props) => {
  // const [collected, drag, dragPreview] = useDrag(() => ({
  //   type: "CARD",
  //   item: { id: 1 },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  //   end: (draggedItem, monitor) => {
  //     console.log(draggedItem);
  //     console.log(monitor.getDropResult());
  //   },
  // }));
  //
  // if (collected.isDragging) {
  //   return (
  //     <div
  //       ref={dragPreview}
  //       style={{ backgroundColor: "purple" }}
  //       className={"card"}
  //     >
  //       {title}
  //     </div>
  //   );
  // }
  return (
    <div
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
