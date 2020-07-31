import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData (state, data) {
      state.data = data
    }
  },
  actions: {
    fetchData (context, { orders, customers }) {
      const formData = new FormData()
      formData.append('customers', customers)
      formData.append('orders', orders)
      axios.post('http://213.219.214.91:5000/fetch_message', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(r => {
        console.log(r)
        context.commit('setData', r.data)
      })
    },
    sendMessages (object) {
      axios.post('http://213.219.214.91:5000/send_messages', object)
        .then(r => {
          console.log(r)
        })
    },
    sendReports (object) {
      axios.post('http://213.219.214.91:5000/send_reports', object)
        .then(r => {
          console.log(r)
        })
    }
  }
})
