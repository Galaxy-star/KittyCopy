import axios from '../axios'

export const login = data => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}

export const logout = () => {
    return axios({
        url: '/logout',
        methods: 'get'
    })
}