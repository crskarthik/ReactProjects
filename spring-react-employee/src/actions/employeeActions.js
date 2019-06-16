import { FETCH_EMPLOYEE, ADD_EMPLOYEE, FIND_EMPLOYEE, RESET_EDIT_EMPLOYEE, UPDATE_EMPLOYEE } from './actionTypes'

export const fetchEmployees = () => dispatch => {
    console.log("Fetching Employees");
    fetch('http://localhost:8080/api/employees', {
        method: 'GET',
        headers: {
            'host': 'http://localhost:3000/'
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return dispatch({
                type: FETCH_EMPLOYEE,
                payload: res
            })
        }
        )
}

export const findEmployee = id => dispatch => {
    console.log("Finding Employee");
    fetch('http://localhost:8080/api/employees/'+id).then(res => res.json()).then(res => {
        return dispatch({
            type: FIND_EMPLOYEE,
            payload: res
        })
    })
}
export const resetEditEmployee = ()=>{
    console.log("Resetting edit employee")
    return {
        type:RESET_EDIT_EMPLOYEE,
        payload:null
    }
}
export const saveEmployee = employee => dispatch => {
    console.log("Save Employee");
    console.log(employee)
    fetch('http://localhost:8080/api/employees', {
        method: (employee.id)?'PUT':'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    }).then(res => res).then(res => {
        console.log(res)
        return dispatch({
            type:RESET_EDIT_EMPLOYEE,
            payload:null
        })
    })
}
