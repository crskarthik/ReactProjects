import React, { Component } from 'react'
import { connect } from 'react-redux'

class CounterActions extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>Increament</button>
                <button onClick={this.props.decrement}>Decreament</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INC' }),
        decrement: () => dispatch({ type: 'DEC' })
    }
}

export default connect(null,mapDispatchToProps)(CounterActions)