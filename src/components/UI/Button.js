import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button} //when use css as module this is how you use it on the elements
      type={props.type || "button"} // passing the props from add user <button> then say or condition if thre was no type
      onClick={props.onClick}
    >
      {props.children}{" "}
      {/* this props.childerent to make sure the style effects elements and info in between that coming from adduser */}
    </button>
  );
};

export default Button;
