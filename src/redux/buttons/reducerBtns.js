import {combineReducers} from 'redux';
import {btnsActionTypes} from './btnsActionTypes';

const initialBtnValue = null;
const initialBtnAction = "";

export const reducerBtnValue = (state=initialBtnValue, action) => {
    switch (action.type) {
        case btnsActionTypes.GET_BTN_VALUE:
            return action.payload.value; 
        default:
            return state;
    }
}

export const reducerBtnAction = (state = initialBtnAction, {type, payload}) => {
    switch (type) {
        case btnsActionTypes.GET_BTN_ACTION:
            return payload.action;
        default:
            return state; 
    }
}

export const reducerBtnLastAction = (state = initialBtnAction, {type, payload}) => {
    switch (type) {
        case btnsActionTypes.GET_LAST_ACTION:
            return payload.lastAction
        default:
            return state; 
    }
}

const reducerBtns = combineReducers({
    value: reducerBtnValue,
    action: reducerBtnAction,
    lastAction: reducerBtnLastAction
}) ;


export default reducerBtns;