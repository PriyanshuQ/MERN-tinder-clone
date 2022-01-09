import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backendd.herokuapp.com'
})

export default instance;