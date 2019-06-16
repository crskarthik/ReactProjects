import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount(){
        this.props.fetchPosts()
    }
    render() {
        const postsItems = this.props.postsPayload.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postsItems}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        postsPayload: state.posts.items
    }
}

export default connect(mapStateToProps,{fetchPosts})(Posts);