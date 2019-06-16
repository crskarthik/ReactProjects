import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Posts from './Posts'
const client = new ApolloClient({
  uri:"https://1jzxrj179.lp.gql.zone/graphql"
})
const App = ()=>(
  <ApolloProvider client={client}>
    <div>
    <h2>Apollo React Application</h2>
    <Posts/>
    </div>
  </ApolloProvider>
)

export default App;
