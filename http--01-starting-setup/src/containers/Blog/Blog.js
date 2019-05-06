import React, { Component } from 'react';
// import axios from 'axios'
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
import { Route,NavLink } from 'react-router-dom'
import './Blog.css';

class Blog extends Component {
    componentDidMount(){
        console.log("----------------")
        console.log(this.props)
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="*/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;