import  API_URLL  from "../env/config"
let d="https://northwind.vercel.app/api"
export const baseServices = {
    get: async (url) => {
        let response = []
        await fetch(API_URLL + url)
            .then(res => res.json())
            .then(data => response = data)

        return response
    },
    post: async (url, data) => {
        let response = {};
        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }

        await fetch(d + url, requestOptions)
            .then(res => res.json())
            .then(data => {
                response = data
            })

        return response;
    },
}