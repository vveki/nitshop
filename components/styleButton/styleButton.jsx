import React from "react";
import "./styleButton.css";
const StyleButton = (props) => {

  return (
    <button className="styleButton" onClick={props.onClickHandler}>
      {props.innerText}
    </button>
  );
};

export default StyleButton;
