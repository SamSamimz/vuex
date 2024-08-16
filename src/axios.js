// import axios from "axios";

// const endpoint = axios.create({
//     baseURL: "http://127.0.0.1:8000/api/",
//     // timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//       },

// });

// export default endpoint;

import axios from 'axios';
import store from '@/store';

const endpoint = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

endpoint.interceptors.request.use(
    (config) => {
        const token = store.state.authToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default endpoint;
