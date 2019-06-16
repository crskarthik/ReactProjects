import * as actionTypes from './actionTypes'

export const saveResult = () => {
    return {
        type: actionTypes.STORE_RESULT
    }
}
export const storeResult = () => {
    return (dispatch,getState) => {
        setTimeout(() => {
            console.log('[From Async]',getState().ctr.counter)
            dispatch(saveResult())
        }, 2000)
    }

}

export const deleteResult = (resID) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resID: resID
    }
}