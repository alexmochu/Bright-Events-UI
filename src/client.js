import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/v1/'
});

export default axiosInstance;