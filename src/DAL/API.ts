import axios from 'axios';

const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/auth",
//     withCredentials: true,
});

export const API = {
    getData() {
        return instance.get('')
    },
    postLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post("/login", {email, password, rememberMe});
    }
};
