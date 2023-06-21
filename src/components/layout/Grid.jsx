import React from "react";

const Grid = ({ children, className, content }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

export default Grid;
