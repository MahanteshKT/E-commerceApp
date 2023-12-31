import React from "react";
import classes from "./Input.module.css";
function Input(props) {
  return <input className={props.className} {...props.attributes} />;
}

export default Input;
