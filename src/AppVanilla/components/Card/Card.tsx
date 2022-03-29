import React, { useEffect, useRef } from "react";
import "./Card.css";
import { Card } from "../../../types";

interface Props extends Card {
  title?: string;
}

export const CardComponent = ({ color, position, title }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDragstart = () => {
      console.log("drag");
      ref.current?.classList.add("draggable");
    };

    const handleDragend = () => {
      ref.current?.classList.remove("draggable");
    };

    ref.current?.addEventListener("dragstart", handleDragstart);
    ref.current?.addEventListener("dragend", handleDragend);

    return () => {
      ref.current?.removeEventListener("dragstart", handleDragstart);
      ref.current?.removeEventListener("dragend", handleDragend);
    };
  }, []);
  return (
    <div
      ref={ref}
      draggable
      data-color={color}
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
