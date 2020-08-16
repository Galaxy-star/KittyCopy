export function menu() {
    return {
        url: 'http://localhost:8080/menu',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 0,
            'data': {
                'id': '@increment', 
                'name': 'menu',
                'order|10-20': 12
            }
        }
    }
}