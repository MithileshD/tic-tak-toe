import {CONSOLE_LOG} from './constants.js'

export function consoleLog (text){
    return {
        type : CONSOLE_LOG,
        text
    }
}