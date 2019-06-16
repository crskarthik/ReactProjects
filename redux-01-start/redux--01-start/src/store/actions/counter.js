import * as actionTypes from './actionTypes'
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}
export const add = (num) => {
    return {
        type: actionTypes.ADD,
        num: num
    }
}
export const sub = (num) => {
    return {
        type: actionTypes.SUB,
        num: num
    }
}