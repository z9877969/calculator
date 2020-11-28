import React from "react";
import css from "./Button.module.css";

const Button = ({ title, action }) =>
  action ? (
    <button className={css.btn} data-action={`${action}`}>
      {title}
    </button>
  ) : (
    <button className={css.btn}>{title}</button>
  );

export default Button;

Button.defaultProps = {
  action: "",
};
