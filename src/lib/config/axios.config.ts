// First we need to import axios.js
import axios from 'axios';
import { COOKIE_NAME, getCookieConfig } from '../helpers';
// Next we make an 'instance' of it
export const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    
});
// Where you would set stuff like your 'Authorization' header, etc ...
axios.defaults.withCredentials = true
axiosConfig.defaults.headers.common['Authorization'] = `Bear ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`