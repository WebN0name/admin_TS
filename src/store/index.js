import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    async Fetch_Data () {
      axios.post('http://213.219.214.91:5000/fetch_msg_test', {
        id: 0
      }).then(r => {
        console.log(r)
      })
    }
  },
  modules: {
  }
})
