import axios from 'axios';

//set up baseURL
const instance = axios.create({
    baseURL: 'http://localhost:8001'
})

export default instance;