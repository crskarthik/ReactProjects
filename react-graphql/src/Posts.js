import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const allPosts = gql`
    posts {
        id
        title
        author
        votes
    }
`;
const posts = ()=>{
    <Query query={allPosts}>
        {({loading,error,data})=>{
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error occured</p>
            return data.posts.map(({id,title,author,votes})=>(
                <div key={id}>
                    <p>{`${title} by ${author}`}</p>
                </div>
            ))
        }}
    </Query>
} 
export default posts;
