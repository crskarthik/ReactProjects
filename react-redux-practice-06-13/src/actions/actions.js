export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_AGE = 'CHANGE_AGE';
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUB = 'SUB'

export const increment = (value)=>{
    return {
        type:INCREMENT,
        value:value+1
    }
}