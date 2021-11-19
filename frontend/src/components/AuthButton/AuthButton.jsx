import React from "react";
import "./AuthButton.css";

export default function AuthButton(props) {
  return (
    <button className="auth-button" type="submit">
      {props.name}
    </button>
  );
}
