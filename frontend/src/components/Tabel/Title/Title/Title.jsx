import React from "react";
import "./Title.css";

const Title = (props) => {
  return <h1 className={props.clas}>{props.title}</h1>;
};

export default Title;
