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
    },
    postForgot(email: string) {
        return instance.post("/register", {email});
    },
    login(email: string, password: string) {
        if (email === 'Admin' && password === '123123') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ok: true,
                        token: "sdds23w23##$SDS%_s"
                    })
                }, 1000)
            })
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ok: false})
                }, 1000)
            })
        }
    },
};