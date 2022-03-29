import React, { useEffect, useRef } from "react";

import "./Box.css";
import { Box, Position } from "../../../types";

interface Props extends Box {
  title?: string;
  onDrop: (color: string, position: Position) => void;
}

export const BoxComponent = ({ title, color, position, onDrop }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDrop = (e: Event) => {
      e.preventDefault();
      const draggable = document.querySelector(".draggable");
      if (draggable && draggable.getAttribute("data-color") === color) {
        onDrop(color, position);
      }
    };

    ref.current?.addEventListener("drop", handleDrop);

    return () => {
      ref.current?.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className={"box"}
    >
      {title}
    </div>
  );
};
