import React from "react";
import shortid from "shortid";
import Button from "../Button/Button";
import css from "./ComandPannel.module.css";

const btnOptions = [
  {
    title: "+",
    action: "plus",
  },
  {
    title: "-",
    action: "minus",
  },
  {
    title: "/",
    action: "dev",
  },
  {
    title: "*",
    action: "mult",
  },
  {
    title: "=",
    action: "result",
  },
];

const ComandPannel = ({ handlerAction }) => (
  <ul onClick={handlerAction} className={css.container}>
    {btnOptions.map((set) => (
      <li key={shortid.generate()}>
        <Button title={set.title} action={set.action} />
      </li>
    ))}
  </ul>
);

export default ComandPannel;
