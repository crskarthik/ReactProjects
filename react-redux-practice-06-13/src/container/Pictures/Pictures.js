import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load, next } from '../../actions/pictureActions';
class Pictures extends Component {
    componentWillMount() {
        this.props.getImg()
    }
    render() {
        let imgSrc = "Error loading Images"
        if (this.props.imgSrcs.loaded) {
            imgSrc = this.props.imgSrcs.items.map(item => <img width="60px" height="60px" style={{ paddingLeft: "10px" }} src={item.url} key={item.id} alt={item.title} />)
        }
        return (
            <div>
                <h3>Picture Pallate</h3>
                <br />
                <button onClick={() => this.props.next(this.props.value - 20)}> &lt; </button>&nbsp;{imgSrc}&nbsp;<button onClick={() => this.props.next(this.props.value)}> &gt; </button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state.three)
    return {
        imgSrcs: state.three,
        value: state.three.start
    }
}
const mapDispatcherToProps = dispatch => {
    return {
        getImg: () => dispatch(load()),
        next: (start) => dispatch(next(start)),
    }
}
export default connect(mapStateToProps, mapDispatcherToProps)(Pictures)