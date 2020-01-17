import axios from 'axios';



export const API = {
    getData(url: string) {
        return axios.get(url)
    }
};