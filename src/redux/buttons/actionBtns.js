import {btnsActionTypes} from './btnsActionTypes';

export const getBtnValue = value => {
    return {
        type: btnsActionTypes.GET_BTN_VALUE,
        payload: {
            value
        }
    }
}

export const getBtnAction = action => {
    return {
        type: btnsActionTypes.GET_BTN_ACTION,
        payload: {
            action
        }
    }
}

export const getLastAction = lastAction => ({
    type: btnsActionTypes.GET_LAST_ACTION,
    payload: {
        lastAction
    }
})