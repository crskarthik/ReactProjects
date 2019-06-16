import React, { Component } from 'react'
import {connect} from 'react-redux'
import { DECREMENT, ADD, SUB, increment } from '../../actions/actions';
class CounterOptions extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.inc(this.props.value)}>Increment</button>
                <button onClick={this.props.dec}>Decrement</button>
                <button onClick={this.props.add}>Value + 5</button>
                <button onClick={this.props.sub}>Value - 5 </button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        value:state.two.value
    }
}
const mapDispatcherToProps = dispatch=>{
    return{
        inc:(val)=>dispatch(increment(val)),
        dec:()=>dispatch({type:DECREMENT}),
        add:()=>dispatch({type:ADD}),
        sub:()=>dispatch({type:SUB})
    }
}
export default connect(mapStateToProps,mapDispatcherToProps)(CounterOptions)