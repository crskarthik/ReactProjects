import React, { Component } from 'react';
import styles from './Person.css';
// import Radium from 'radium';


class Person extends Component {
    render() {
    console.log('[Person.js] rendering....')        
        return (
            <div className={styles.Person}>
                <h1 onClick={this.props.delete} className={styles.deleteComponent}>This is person component</h1>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <input onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

// export default Radium(person);
export default Person;