import axios from 'axios';


// export const API = {
//     getData(url: string) {
//         return axios.get(url)
//     }
// };

export const API = {
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
