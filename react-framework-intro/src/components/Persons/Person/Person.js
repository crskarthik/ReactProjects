import React, { Component } from 'react';
import styles from './Person.css';
// import Radium from 'radium';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxilary'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus()
        console.log("context"+this.context.authenticated)
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering....')
        return (
            <Aux>
                 {this.context.authenticated? <p>Authenticated</p> : <p>Please Login</p>}
              
                   
                    <h1 onClick={this.props.delete} className={styles.deleteComponent}>This is person component</h1>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>
                    <input
                        // ref={(inputEl)=>{ this.inputElement = inputEl}}
                        ref={this.inputElementRef}
                        onChange={this.props.changed}
                        value={this.props.name} />
                       
            </Aux>);

    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, styles.Person);