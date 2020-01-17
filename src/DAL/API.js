import * as axios from 'axios';



export const API = {
    getData(url) {
        return axios.get(url)
    }
};