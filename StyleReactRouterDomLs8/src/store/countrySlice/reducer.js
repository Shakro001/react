

import actionCreator from '../store'
import {GET_COUNTRIES} from './action'


const initialArg = {
    country: []
}
const reduce = (state, {type, payload}) => {
    switch (type) {
        case GET_COUNTRIES:
            return {...state, country: payload}
        default:
            return state;
    }
    return state
}



export {initialArg, reduce}