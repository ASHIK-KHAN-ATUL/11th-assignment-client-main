import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const UseAxios = () => {

    const {logout} = useContext(AuthContext);

    useEffect(() =>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        } , error=>{
            console.log('Error caught in interceptor', error);

            if(error.status === 401 || error.status === 403 ){
                console.log("Need to logout the user");

                logout()
                .then(()=>{
                    console.log('Logges out user')
                })
                .catch( error => console.log(error));
            }

            return Promise.reject(error);
        }  )
    } ,[])

    return axiosInstance;

};

export default UseAxios;