import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'https://brighte.herokuapp.com//api/v1/' 
});

export default axiosInstance;