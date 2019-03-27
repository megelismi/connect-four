import React from "react";

const Checker = props => {
  const { color, onCheckerClick, xPoint, yPoint } = props;

  return (
    <div className="slot">
      <div
        onClick={() => onCheckerClick(xPoint, yPoint)}
        className={`checker ${color}`}
      />
    </div>
  );
};

export default Checker;
