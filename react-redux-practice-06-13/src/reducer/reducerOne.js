import {CHANGE_NAME,CHANGE_AGE} from '../actions/actions'
const initState = {
    name:"Karthik",
    age:23
}
const reducerOne = (state=initState,action)=>{
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name:initState.name+Math.floor(Math.random() * 10)
            }
        case CHANGE_AGE:
                return {
                    ...state,
                    age:Math.floor(Math.random() * 11)
                }
        default:
            return state;
    }

}
export default reducerOne