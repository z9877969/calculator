import React from "react";
import css from "./Button.module.css";

const Button = ({ title, action, cb}) =>
  
cb ? (
  <button className={css.btn} onClick={cb}>
      {title}
    </button>
) :
action ? (
    <button className={css.btn} data-action={`${action}`}>
      {title}
    </button>
  ) : (
    <button className={css.btn} >{title}</button>
  );

export default Button;

Button.defaultProps = {
  action: "",
  cb: null,
};
