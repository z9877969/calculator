import React, { useEffect } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import Button from "../Button/Button";
import { getBtnAction, getLastAction } from "../../redux/buttons/actionBtns";
import {
  onBtnAdd,
  onBtnMinus,
  onBtnMult,
  onBtnDev,
  onBtnResult,
} from "../../redux/result/actionResult";
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

const ComandPannel = ({
  action,
  lastAction,
  dispValue,
  onBtnAdd,
  onBtnMinus,
  onBtnMult,
  onBtnDev,
  onBtnResult,
  handlerAction,
  getBtnAction,
  getLastAction,
}) => {
  useEffect(() => {
    switch (lastAction) {
      case "plus":
        onBtnAdd(Number(dispValue));
        break;
      case "minus":
        onBtnMinus(Number(dispValue));
        break;
      case "mult":
        onBtnMult(Number(dispValue));
        break;
      case "dev":
        onBtnDev(Number(dispValue));
        break;
      case "result":
        onBtnResult(Number(dispValue));
        break;
      default:
        break;
    }
    getLastAction(action);
  }, [action]);

  return (
    <ul onClick={handlerAction} className={css.container}>
      {btnOptions.map((set) => (
        <li key={shortid.generate()}>
          <Button
            title={set.title}
            cb={() => getBtnAction(set.action)}
            action={set.action}
          />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  action: state.btns.action,
  lastAction: state.btns.lastAction,
  dispValue: state.display,
});

const mapDispatchToProps = {
  getBtnAction,
  getLastAction,
  onBtnAdd,
  onBtnMinus,
  onBtnMult,
  onBtnDev,
  onBtnResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComandPannel);
