import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.css';
// import User from '../components/User';
// import Account from '../components/Account';
// import Blog from '../components/Blog';
// import Info from '../components/Info';
// import Error404 from '../components/Error404';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id:'asdfa',name:'Chinta',age:23},
      {id:'asdf1',name:'Srikar',age:21},
      {id:'asdf3',name:'Karthik',age:22},
    ],
    showPersons: false,
    showCockpit:true
  }
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true;    
  }
  componentDidMount(){
    console.log('[App.js] Component did mount')
  }

  componentDidUpdate(){
    console.log('[App.js] Component did update')
  }
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount(){
  //   fetch('http://10.31.120.107:8080/persons')
  //   .then(response => response.json())
  //   .then(persons=>this.setState({persons}))
  //   .catch(()=>console.log("Can't access response. Blocked by browser"))
  // }
  changeNameHandler(event, id) {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    // !this.state.showPersons?this.setState({showPersons:true}): this.setState({showPersons:false})
    const currentState = this.state.showPersons
    this.setState({ showPersons: !currentState })

  }

  deletePersonHandler = (personsId) => {
    // const persons = this.state.persons.slice();
    console.log(personsId)
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === personsId)
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  render() {
    console.log('[App.js] render()')    
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler.bind(this)} />
    }

    return (
      // <Router>
      //   <div className={styles.App}>
      //     <Link to="/">Home</Link> |
      //     <Link to="/account">Account</Link> |
      //     <Link to="/blog">Blog</Link>
      //   </div>
      //   <hr />
      //   <div className={styles.App}>
      //     <Route exact path="/" component={User} />
      //     <Route path="/account" component={Account} />
      //     <Route path="/blog" component={Blog} />
      //     <Route path="/info" component={Info} />
      //     <Route path="/*" component={Error404} />
      //   </div>
      <div className={styles.App}>
      <button onClick={()=>this.setState({showCockpit:false})}>Remove Cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} /> 
        :null}
        {persons}
      </div>
      // <Info click={this.switchNameHandler.bind(this)} /> 
      // </Router>
    );
  }
}

export default App;
