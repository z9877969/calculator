import React from "react";
import {connect} from 'react-redux';
import shortid from "shortid";
import * as b from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import Button from "../Button/Button";
import css from "./WidgetPannel.module.css";
import {getBtnValue} from '../../redux/buttons/actionBtns';

const pannel = new Array(10);

const WidgetPannel = ({ handlerDigit, getIsModal, getBtnValue }) => {
  const foo = (e) => {
    handlerDigit(e);
    if (e.target.nodeName !== "BUTTON") return;
  };

  return (
    <ul onClick={foo} className={css.container}>
      {[...pannel].map((el, idx) => (
        <li key={shortid.generate()}>
          <Button title={idx} cb={() => getBtnValue(idx)}/>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  getBtnValue: (value) => dispatch(getBtnValue(value))
})


export default connect(null, mapDispatchToProps)(WidgetPannel);
