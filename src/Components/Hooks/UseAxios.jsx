import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

const UseAxios = () => {

    return axiosInstance;

};

export default UseAxios;