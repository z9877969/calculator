import React from "react";
import shortid from "shortid";
import Button from "../Button/Button";
import css from "./WidgetPannel.module.css";

const pannel = new Array(10);

const WidgetPannel = ({ handlerDigit }) => (
  <ul onClick={handlerDigit} className={css.container}>
    {[...pannel].map((el, idx) => (
      <li key={shortid.generate()}>
        <Button title={idx} />
      </li>
    ))}
  </ul>
);

export default WidgetPannel;
