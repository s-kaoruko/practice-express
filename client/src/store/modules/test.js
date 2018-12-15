import axios from 'axios'
const API_URI = 'http://localhost:3000'

import {
  TEST, TEST_FAILURE, TEST_SUCCESS
} from '../mutation'

export default {
  state: {
    test: null
  },
  getters: {
    test: state => {
      return state.test
    }
  },
  actions: {
    [TEST] (params = null) {
      let data = {}
      if (params) data = params.data
      axios.get(API_URI + '/test', {data: data})
      .then(res => {
        if (res.status === 200 || res.status === 304) {
          if (res.data.error) {
            this.commit(TEST_FAILURE, res.data)
          } else {
            this.commit(TEST_SUCCESS, {data: res.data, callback: params.callback})
          }
        }
      })
      .catch(error => {
        throw error
      })
    }
  },
  mutations: {
    [TEST_FAILURE] (state, data) {
      console.log('TEST_FAILURE')
    },
    [TEST_SUCCESS] (state, data) {
      console.log('TEST_SUCCESS')
      state.test = data.data.text
      if (data.callback) {
        data.callback(data.data)
      }
    }
  }
}