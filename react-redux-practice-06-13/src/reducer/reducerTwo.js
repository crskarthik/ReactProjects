import { INCREMENT, DECREMENT, ADD, SUB } from "../actions/actions";

const initState = {
    value: 0
}
const reducerTwo = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: action.value
            }
        case DECREMENT:
            return {
                value: state.value-1
            }
        case ADD:
            return {
                value: state.value + 5
            }
        case SUB:
            return {
                value: state.value - 5
            }
        default:
            return state
    }
}
export default reducerTwo