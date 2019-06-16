export const LOAD = 'LOAD'
export const NEXT = 'NEXT'

export const load = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      json = json.filter(item => item.id < 11)
      console.log(json)
      return dispatch({
        type: LOAD,
        value: json,
        start:11
      })
    }
    )
}
export const next = (start) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
      json = json.filter(item => (item.id >= start)&&(item.id <start+10))
      console.log(json)
      return dispatch({
        type: LOAD,
        value: json,
        start:start+10
      })
    }
    )
}