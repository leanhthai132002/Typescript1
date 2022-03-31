import axios from 'axios';

const clientApiURL = 'http://localhost:3002';

const api = axios.create({
    baseURL: clientApiURL
})
export default api;