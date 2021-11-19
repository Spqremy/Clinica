import React from "react";
import "./AuthInput.css";
export default function AuthInput(props) {
  return (
    <input
      className="auth-input"
      type={props.proptype}
      value={props.propvalue}
      placeholder={props.name}
      required={true}
      onChange={props.onchange}
    />
  );
}
