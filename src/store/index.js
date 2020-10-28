import Vue from 'vue'
import Vuex from 'vuex'
import data from "../../data/results.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airlinesInArray: [],
    airlines: data.airlines,
    flights: [],
    filter: {
      airlines: []
    }
  },
  mutations: {
    SET_AIRLINES_IN_ARRAY(store, payload) {
      store.airlinesInArray = payload;
    },
    SET_FLIGHTS(store, payload) {
      store.flights = payload;
    },
    CHANGE_AIRLINE(store, payload) {
      store.filter.airline = payload
    }
  },
  actions: {
    init({commit}) {
      let airlines = [];
      for (let argument in data.airlines) {
        airlines.push({[argument]: data.airlines[argument]})
      }
      commit('SET_AIRLINES_IN_ARRAY', airlines)
      setTimeout(() => {
        commit('SET_FLIGHTS', data.flights)
      }, 3000) // fake delay
    }
  }
})
