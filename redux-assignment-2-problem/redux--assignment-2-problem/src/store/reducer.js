import * as actionTypes from './actions'
const initState = {
    persons: []
}
const reducer = (state = initState, action) => {
    if(action.type===actionTypes.addPerson){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        const tempPersons = state.persons.concat(newPerson)
        return {
            persons:tempPersons
        }
    }
    if(action.type===actionTypes.delPerson){
        return{
            persons: state.persons.filter(person=>person.id!==action.id)
        }
    }
    return state
}
export default reducer
