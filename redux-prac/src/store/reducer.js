
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                counter: state.counter - 1
            }
        default:
            console.log('No changes')
    }
    return state;
}

export default reducer;