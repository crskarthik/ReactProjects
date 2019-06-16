import {FETCH_POSTS,NEW_POST} from './../actions/Types'

const initialState = {
    items:[],
    item:{}
}

export default function (state=initialState,action){
    switch(action.type){
        case FETCH_POSTS:
            return{
               ...state,
               items:action.posts 
            }
        case NEW_POST:
            return{
                items:[action.res].concat(state.items),
                item:action.res
            }

        default:
            return state;
    }
}