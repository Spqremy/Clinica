import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      placeHolder={props.placeHolder}
      type="text"
    ></input>
  );
};

export default Input;
