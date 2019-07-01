import {combineReducers} from 'redux';
import { consoleLog } from './actions.js';

const initialState = {
    history : [{
        squares : Array(9).fill(null)
    }],
    stepNumber : 0,
    xIsNext : true,
    text : 'Bye'
}

function playTicTakToe( state = initialState, action) {
    switch (action.type) {
        case consoleLog :
            return Object.assign({}, {text : action.text});
        default :
            return state;
    }
}

const game = combineReducers({playTicTakToe});

export default game;