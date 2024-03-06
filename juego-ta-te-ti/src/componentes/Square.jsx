import React from "react";

export const Square = ({ children, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {children}
    </div>
  );
};
