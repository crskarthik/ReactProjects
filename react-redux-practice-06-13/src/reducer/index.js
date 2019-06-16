import reducerOne from "./reducerOne";
import {combineReducers} from 'redux'
import reducerTwo from "./reducerTwo";
import reducerThree from "./reducerThree";
const reducers = combineReducers({
    one:reducerOne,
    two:reducerTwo,
    three:reducerThree
})
export default reducers;