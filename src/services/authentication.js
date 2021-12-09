import axios from 'axios'
import Config from '../config.json'

const { BASE_URL } = Config

const instance = axios.create({
    baseURL: BASE_URL
})

export const login = (loginData) => {
    const params = new URLSearchParams()
    params.append('email', loginData.email)
    params.append('password', loginData.password)
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return instance
        .post('login', params, config)
        .then(res => {
            if (res.data.access_token) {
                localStorage.setItem("user", JSON.stringify(res.data))
            }
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const logout = () => {
    localStorage.removeItem("user")
}

export const register = (userObj) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return instance.post('users/signup', userObj, config)
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}
