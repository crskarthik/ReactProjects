import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load } from '../../actions/pictureActions';
class Pictures extends Component {
    componentWillMount() {
        this.props.getImg()
    }
    render() {
        let imgSrc = "Error loading Images"
        if (this.props.imgSrcs.loaded) {
            imgSrc = this.props.imgSrcs.items.map(item => <img width="60px" height="60px" style={{paddingLeft:"10px"}} src={item.url} key={item.id} alt={item.title} />)
        }
        return (
            <div>
                <h3>Picture Pallate</h3>
                <br/>
                {imgSrc}
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state.three)
    return {
        imgSrcs: state.three
    }
}
const mapDispatcherToProps = dispatch => {
    return {
        getImg: () => dispatch(load())
    }
}
export default connect(mapStateToProps, mapDispatcherToProps)(Pictures)