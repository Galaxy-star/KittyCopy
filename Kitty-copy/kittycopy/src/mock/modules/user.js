export function user() {
    return {
        url: 'http://localhost:8080/user',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 0,
            'data': {
                'id': '@increment', 
                'name': '@name',
                'email': '@email',
                'age|10-20': 12 
            }
        }
    }
}