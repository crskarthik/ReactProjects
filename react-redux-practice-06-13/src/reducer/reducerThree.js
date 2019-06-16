import { LOAD } from "../actions/pictureActions";

const initState = {
    items:[],
    loaded:false,
    start:0
}
const reducerThree = (state=initState,action)=>{
    switch (action.type) {
        case LOAD:
            return {
                items:action.value,
                loaded:true,
                start:action.start
            }
        default:
            return state;
    }
    
}
export default reducerThree