import React from "react";
import { useDrop } from "react-dnd";

import "./Box.css";
import { Box } from "../../types";

interface Props extends Box {
  title?: string;
}

export const BoxComponent = ({ title, color, position }: Props) => {
  // const [collectedProps, drop] = useDrop(() => ({
  //   accept: "CARD",
  //   drop: (item) => {
  //     console.log(item);
  //     return { item, isDropped: true };
  //   },
  // }));

  return (
    <div
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      className={"box"}
    >
      {title}
    </div>
  );
};
