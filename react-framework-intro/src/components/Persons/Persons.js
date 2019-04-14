import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Persons.js] get Derived state from props')    
  //   return state
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps')    
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] should Component update')
    return !(nextProps.persons!==this.props.persons)
    // return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {message:window.pageYOffset}
    // return {message:'Snapshot!'} 
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...')
    return (this.props.persons.map((person, index) => {
      return (
        <Person
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
          id={person.id}
          delete={() => this.props.clicked(person.id)}
        />
      )
    }))
  }
}
export default Persons;