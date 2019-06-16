import React, { Component } from 'react'
import {connect} from 'react-redux'

class Person extends Component {
    render() {
        return (
            <div>
                <p>Persons</p>
                <br/>
                <p>Name: {this.props.pName}</p>
                <p>Age: {this.props.pAge}</p>
            </div>
        )
    }
}
const mapStatetoProps = state=>{
    return{
    pName:state.one.name,
    pAge:state.one.age
    }
}
export default connect(mapStatetoProps,null)(Person)