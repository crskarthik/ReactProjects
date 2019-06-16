import React, { Component } from 'react'
import { connect } from "react-redux";
import {newPost} from '../actions/postActions'
import PropTypes from 'prop-types'
class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }
    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        this.props.newPost(post)
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" name="title" onChange={this.onChange.bind(this)} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body</label><br />
                        <input type="text" name="body" onChange={this.onChange.bind(this)} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit"onSubmit={this.onSubmit.bind(this)}>Save post</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes={
    newPost:PropTypes.func.isRequired
}
export default connect(null,{newPost})(PostForm) 