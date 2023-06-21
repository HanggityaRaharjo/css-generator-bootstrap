import React from "react";

const Flex = ({ children, content, items, direction, height }) => {
  content =
    content == "center"
      ? "justify-content-center"
      : content == "start"
      ? "justify-content-start"
      : content == "end"
      ? "justify-content-end"
      : "";
  items =
    items == "center"
      ? "align-items-center"
      : items == "start"
      ? "align-items-start"
      : items == "end"
      ? "align-items-end"
      : "";

  direction =
    direction == "row"
      ? "flex-row"
      : direction == "column"
      ? "flex-column"
      : "";

  height = height == "full" ? "100%" : height == "fit" ? "fit-content" : "";

  return (
    <div
      className={`d-flex ${content} ${items} ${direction} ${height}`}
      style={{ height: `${height}` }}
    >
      {children}
    </div>
  );
};

export default Flex;
