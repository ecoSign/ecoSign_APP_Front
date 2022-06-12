import axios from 'axios';

const baseURL = __DEV__ ? '' : '';

const client = axios.create({
    baseURL,
});
export default client;
