import { FETCH_EMPLOYEE, ADD_EMPLOYEE, FIND_EMPLOYEE, RESET_EDIT_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/actionTypes'
const initialState = {
    employees: [],
    editEmployee: null
    // editEmployee: {
    //     id:0,
    //     firstName:'testfirstName',
    //     lastName:'testlastName',
    //     email:'test email'
    // }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE:
            return { ...state, employees: [...action.payload] }
        case FIND_EMPLOYEE:
            return { ...state, editEmployee: action.payload }
        case ADD_EMPLOYEE:
            return { ...state, ...action.payload }
        case UPDATE_EMPLOYEE:
            return { ...state, editEmployee: null }
        case RESET_EDIT_EMPLOYEE:
            return { ...state, editEmployee: null }
        default:
            return state
    }
}
