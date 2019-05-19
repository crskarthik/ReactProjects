import * as actionTypes from '../actions'

const initialState = {
    counter: 0,
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.num
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.num
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            const updateRes = state.results.filter(result=>result.id!==action.resID)
            return{
                ...state,
                results:updateRes
            }
    }
    return state;
}
export default resultReducer