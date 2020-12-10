import {combineReducers} from 'redux';
import reducerBtns from '../buttons/reducerBtns';
import {reducerChangeDisplay} from '../display/reducerDisplay';
import {reducerResult} from '../result/reducerResult';

const rootReducer = combineReducers({
    btns: reducerBtns,
    display: reducerChangeDisplay,
    result: reducerResult,
})

export default rootReducer;