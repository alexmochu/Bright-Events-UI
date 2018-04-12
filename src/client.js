import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
});

export default axiosInstance;