import React, { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div>
                <p>_        {this.props.ctr}</p>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}
export default connect(mapStateToProps)(Counter)