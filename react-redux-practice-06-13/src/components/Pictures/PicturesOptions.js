import React, { Component } from 'react'
import {connect} from 'react-redux'
import { next } from '../../actions/pictureActions';

class PicturesOptions extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.next(this.props.value)}>Next load</button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        value:state.three.start
    }
}
const mapDispatcherToProps = dispatch=>{
    return{
        next:(start)=>dispatch(next(start)),
    }
}
export default connect(mapStateToProps,mapDispatcherToProps)(PicturesOptions)