import axios from 'axios';

const baseURL = 'https://ua-api.avrahambenaram.repl.co';

const api = axios.create({
    baseURL
})

export default api;
export {
    baseURL
}