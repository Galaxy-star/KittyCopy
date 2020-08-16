export function login() {
    return {
        url: 'http://localhost:8080/login',
        type: 'post',
        data: {
            'msg': 'success',
            'code': 0,
            'data': {
                'token': '3402021997031805151024'
            }
        }
    }
}