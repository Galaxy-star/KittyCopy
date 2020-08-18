export default {
    state: {
        appName: 'Galaxy-star',
        collapse: false
    },
    getters: {
        collapse(state) {
            return collapse
        }
    },
    mutations: {
        collapse(state) {
            state.collapse = !state.collapse
        }
    },
    actions: {

    }
}