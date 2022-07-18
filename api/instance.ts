import axios from "axios";

const instance = axios.create({
    // baseURL: "https://6110f09bc38a0900171f0ed0.mockapi.io"
    baseURL: "http://localhost:3001",
}) 

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance