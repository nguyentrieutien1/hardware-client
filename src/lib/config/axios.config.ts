// First we need to import axios.js
import axios from 'axios';
import { COOKIE_NAME, getCookieConfig } from '../helpers';
const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);

export const axiosConfig = axios.create({
    baseURL: isProduction ?  'https://maytinhthunguyen.com/api' : process.env.BACKEND_URL 

    
});
// Where you would set stuff like your 'Authorization' header, etc ...
axios.defaults.withCredentials = true
axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`

axios.interceptors.request.use(function (config) {
    // Thêm header vào config của yêu cầu
    config.headers['Authorization'] = `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`;
    config.headers['Content-Type'] = 'application/json';
    return config;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });