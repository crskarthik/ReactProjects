import { FETCH_POSTS, NEW_POST } from './Types'

export const fetchPosts = () => dispatch => {
    console.log("Fetching posts")
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            posts: posts
        })
        )
}

export const newPost = post=>dispatch=>{
    console.log("Posting new Post")
    fetch('http://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    }).then(res=>res.json())
    .then(res=>dispatch({
        type: NEW_POST,
        res: res
    }))
}
