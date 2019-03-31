import React, { useState } from "react";

const Checker = props => {
  const { currentPlayer, onCheckerClick, xPoint, yPoint } = props;

  const [color, setColor] = useState("");

  const setCheckerColor = () => {
    if (currentPlayer === 1) {
      setColor("red");
    } else {
      setColor("yellow");
    }
  };

  return (
    <div className="slot">
      <div
        onClick={() => {
          setCheckerColor();

          onCheckerClick(xPoint, yPoint);
        }}
        className={`checker ${color}`}
      />
    </div>
  );
};

export default Checker;
