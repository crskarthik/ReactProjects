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
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxilary'
import AuthContext from '../context/auth-context'

class App extends Component {
  state = {
    persons: [
      {id:'asdfa',name:'Chinta',age:23},
      {id:'asdf1',name:'Srikar',age:21},
      {id:'asdf3',name:'Karthik',age:22},
    ],
    showPersons: false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
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
    this.setState((prevState,props)=>{
      return{
      persons: persons,
      changeCounter:prevState.changeCounter+1
      }
    })
  }
  togglePersonsHandler = () => {
    const currentState = this.state.showPersons
    this.setState({ showPersons: !currentState })
  }

  deletePersonHandler = (personsId) => {
    console.log(personsId)
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === personsId)
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  loginHandler=()=>{
    this.setState({
      authenticated:true
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
          changed={this.changeNameHandler.bind(this)} 
          isAuthenticated={this.state.authenticated}
          />
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
      <Aux classes={styles.App}>
      <button onClick={()=>this.setState({showCockpit:false})}>Remove Cockpit</button>
      <AuthContext.Provider 
              value={{
                authenticated:this.state.authenticated,
                login:this.loginHandler
                }}
      >
        {this.state.showCockpit ? 
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          /> 
        :null}
        {persons}
        </AuthContext.Provider>
      </Aux>
      // <Info click={this.switchNameHandler.bind(this)} /> 
      // </Router>
    );
  }
}

export default withClass(App,styles.App);
