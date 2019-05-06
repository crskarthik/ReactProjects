import axios from 'axios'

const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
    // baseURL : 'https://my-json-server.typicode.com/crskarthik/ReactProjects'
})
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance;