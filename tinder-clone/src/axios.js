import axios from 'axios';

//set up baseURL
const instance = axios.create({
    // baseURL: 'http://localhost:8001'
    baseURL: 'https://tinder-clone-backend2711.herokuapp.com'
})

export default instance;