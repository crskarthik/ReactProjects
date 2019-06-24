import React, { Component } from 'react'
import {connect} from 'react-redux'
class Counter extends Component {
    render() {
        return (
            <div>
                <h3>Counter</h3>
                Counter Value: {this.props.value}
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        value:state.two.value
    }
}
export default connect(mapStateToProps,null)(Counter)