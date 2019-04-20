import axios from 'axios'

const instance = axios.create({
baseURL:'https://react-guide-burger-build-8ddb5.firebaseio.com/'
})

export default instance;