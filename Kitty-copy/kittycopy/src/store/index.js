import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from './modules/AppStore'

Vue.use(Vuex)

const store = new Vuex.Store({
   modules: {
       app: AppStore
   }
})

export default store