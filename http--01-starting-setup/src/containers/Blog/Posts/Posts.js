import React from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post';
import './Posts.css'
// import {withRouter} from 'react-router-dom'
class Posts extends React.Component {
    state = {
        posts: [],
        selectedPost: null,
        error: false
    }
    componentDidMount() {
        console.log(this.props);

        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({
                    posts: updatedPosts,
                    error: false
                })
            })
            .catch(_err => {
                this.setState({ error: true })
            })
    }
    postClickHandler = (id) => {
        this.setState({
            selectedPost: id
        })
    }
    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.setState.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickHandler(post.id)}
                />
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts