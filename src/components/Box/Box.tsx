import React from "react";
import { useDrop } from "react-dnd";

import "./Box.css";

export const Box = () => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => {
      console.log(item);
      return { item, isDropped: true };
    },
  }));

  return (
    <div className={"box"} ref={drop}>
      Drop Target
    </div>
  );
};
