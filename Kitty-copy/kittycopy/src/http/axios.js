import axios from 'axios'
import config from './config'
import qs from 'qs'
import Cookies from 'js-cookie'
import router from '@/router'

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: config.baseURL,
            headers: {},
            transformResponse: [
                data => {}
            ]
        })
        instance.interceptors.request.use(
            config =>  {
                let token = Cookies.get('token')
                if(token) {
                    config.headers.accessToken = token
                }else {
                    router.push('/login')
                }
                if(config.method === 'post') {
                    if(config.data._proto_ === FormData.prototype
                        || config.url.endsWith('path')
                        || config.url.endsWith('mark')
                        || config.url.endsWith('patchs')
                        ){

                        }else {
                            config.data = qs.stringify(config.data)
                        }
                }
                return config
            },
            err => {
                console.log('request:', err)
                if(err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
                    console.log('timeout请求超时')
                }
                const errInfo = err.response
                console.log(errInfo)
                if(errInfo) {
                    err = errInfo.data
                    const errStatus = errInfo.status
                    router.push({
                        path: '/error/${errStatus}'
                    })
                }
                return Promise.reject(err)
            }
        )

        instance.interceptors.response.use(
            response => {
                let data
                if(response.data == undefined) {
                    data = JSON.parse(response.request.responseText)
                }else {
                    data = response.data
                }

                switch(data.rc) {
                    case 1:
                        console.log(data.desc)
                        break
                    case 0:
                        store.commit('changeState')
                    default:
                }
                return data
            },
            err => {
                if(err && err.response) {
                    switch(err.response.status) {
                        case 400:
                            err.message = '请求错误'
                            break
                        case 401:
                            err.message = '未授权，请登录'
                            break
                        case 403: 
                            err.message = '拒绝访问'
                            break
                        case 404:
                            err.message = '请求地址出错: ${err.response.config.url}' 
                            break
                        case 408:
                            err.message = '请求超时'   
                            break
                        case 500:
                            err.message = '服务器内部错误'
                            break
                        case 501:
                            err.message = '服务未实现'
                            break
                        case 502:
                            err.message = '网关错误'
                            break
                        case 503:
                            err.message = '服务不可用'
                            break
                        case 504:
                            err.message = '网关超时'
                            break
                        case 505:
                            err.message = 'HTTP版本不受支持'
                            break    
                        default:
                    }
                }
                console.log(err)
                return Promise.reject(err)
            }
        )
        
        instance(options).then(res => {
            resolve(res)
            return false
        }).catch(err => {
            reject(err)
        })
    })
}