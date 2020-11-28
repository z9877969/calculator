import React, { Component } from "react";
import Screen from "../Screen/Screen";
import WidgetPannel from "../WidgetPannel/WidgetPannel";
import ComandPannel from "../ComandPannel/ComandPannel";
import css from "./Calculator.module.css";

const setResult = (action, prevResult, value) => {
  switch (action) {
    case "plus":
      return +prevResult + +value;
    case "minus":
      return +prevResult - +value;

    case "dev":
      return +prevResult / +value;

    case "mult":
      return +prevResult * +value;

    case "result":
      return +prevResult;

    default:
      return;
  }
};

export default class Calculator extends Component {
  state = {
    value: 0, // значение в инпуте
    result: 0, // результат математических операций(выполненных команд)
    lastAction: "", // следит за предыдущим действием
    isDigit: false, // следит за перходом с цифровой панели на панель команд
  };

  handlerValue = (e) => {
    if (!this.state.isDigit) {
      this.setState({
        value: e.target.value,
        isDigit: true,
      });
    } else {
      this.setState({
        value: e.target.value,
      });
    }
  }; // получаем набор чисел из клавиатуры

  handlerDigit = ({ target }) => {
    const { textContent, nodeName } = target;
    if (nodeName !== "BUTTON") return;

    if (!this.state.isDigit) { // не нажаты цифры
      this.setState((prev) => ({
        value: textContent,
        isDigit: true,
      }));
    } else {
      this.setState((prev) => ({
        value:
          prev.value && prev.isDigit ? prev.value + textContent : textContent,
      }));
    }
  };

  handlerAction = ({ target }) => {
    const { action } = target.dataset;
    const { lastAction, result, value } = this.state;

    if (!lastAction && !result) {
      this.setState({
        lastAction: action,
        isDigit: false,
        result: value,
      });
      return;
    }

    this.setState({
      lastAction: action,
      isDigit: false,
    });

    if (!lastAction) return;
  };

  componentDidUpdate(prevP, prevS) {
    const { value, result, lastAction } = this.state;

    if (prevS.isDigit !== this.state.isDigit) {
      // ряд проверок для перехода к вычислению
      if (!prevS.lastAction) return; // разрешает пройти дальше, если это не первое действие
      if (!prevS.isDigit) return; // разрешает пройти дальше, если клик пришелся на команду а не на цифру
      console.log("prevS.isDigit :>> ", prevS.isDigit);
      console.log("this.state.isDigit :>> ", this.state.isDigit);

      this.setState((prev) => {
        const res = setResult(prevS.lastAction, result, value);
        return ({
        result: res,
        value: res,
      })});      
    }
  }

  render() {
    
    return (
      <div className={css.container}>
        <h1>{this.props.title}</h1>
        <Screen value={this.state.value} handlerValue={this.handlerValue} />
        <WidgetPannel handlerDigit={this.handlerDigit} />
        <ComandPannel handlerAction={this.handlerAction} />
      </div>
    );
  }
}
