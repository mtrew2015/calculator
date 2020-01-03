import React from "react";

const SpecialButton = (props) => {
  return (
    <React.Fragment>
    <button onClick={props.handleClick} value={props.value} className="special-button">{props.command}</button>
    </React.Fragment>
  );
};

export default SpecialButton