import React from "react";

const NumberButton = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.handleClick} value={props.num} className="number-button">{props.num}</button>
    </React.Fragment>
  );
};

export default NumberButton