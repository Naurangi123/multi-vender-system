import { toast } from 'react-toastify';
import { ACCESS_TOKEN } from '../constants';
import axiosInstance from './axiosInstance';


const getData = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response?.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const postData = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// const updateData = async (url, data) => {
//     try {
//         const response = await axiosInstance.patch(url, data);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating data:', error);
//         throw error;
//     }
// };

// const deleteData = async (url, config) => {
//     try {
//         const response = await axiosInstance.delete(url, config);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting data:', error);
//         throw error;
//     }
// };

export const getUser = async () => {
    try {
        const response = await getData(`/auth/api/user/`);
        return response;
    } catch (error) {
        toast.error("something went wrong", error.message);
        throw error;
    }
}

const registerData = async (url, data) => {
    try {
        const response = await postData(url, data);
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

export const Signup = async (data) => {
    try {
        return await registerData(`/auth/api/register/`, data);
    } catch (error) {
        console.log("Signup error", error);
        throw error;
    }
};

export const Login = async (data) => {
    try {
        const response = await postData(`/auth/api/token/`, data);
        toast.success("Login successful!");
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        toast.error("Invalid credentials!");
        throw error;
    }
};


export const tokenRefresh = async (data) => {
    try {
        return await postData(`/auth/api/token/refresh/`, data);
    } catch (error) {
        console.error('Token refresh error:', error);
        return null;
    }
};