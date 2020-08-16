import axios from './axios'

export const login = () => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}

export const getUser = () => {
    return axios({
        path: '/user',
        method: 'get'
    })
}

export const getMenu = data => {
    return axios({
        path: '/menu',
        method: 'post',
        data
    })
}

export default {
    login,
    getUser,
    getMenu
}