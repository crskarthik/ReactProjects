import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CHANGE_NAME,CHANGE_AGE} from '../../actions/actions'
class Options extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.nameOption}>Change Name</button>
            <button onClick={this.props.ageOption}>Change Age</button>
        </div>
        )
    }
}
const mapDispatcherToProps = dispatch =>{
    return{
        nameOption:()=>dispatch({type:CHANGE_NAME}),
        ageOption:()=>dispatch({type:CHANGE_AGE})
    }
}
export default connect(null,mapDispatcherToProps)(Options)