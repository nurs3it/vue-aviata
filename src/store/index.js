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
      airlines: {},
      directOnly: false,
      luggageOnly: false,
      returnableOnly: false
    }
  },
  mutations: {
    SET_AIRLINES_IN_ARRAY(store, payload) {
      store.airlinesInArray = payload;
    },
    SET_FLIGHTS(store, payload) {
      store.flights = payload;
    },
    CHANGE_FILTERS_AIRLINES(store, payload) {
      store.filter.airlines = payload
    },
    CHANGE_FILTERS_AIRLINES_KEY(store, payload) {
      console.log("qwe", payload)
      store.filter.airlines[payload.key] = payload.value
    },
    CHANGE_FILTERS_DIRECT_ONLY(store, payload) {
      store.filter.directOnly = payload
    },
    CHANGE_FILTERS_LUGGAGE_ONLY(store, payload) {
      store.filter.luggageOnly = payload
    },
    CHANGE_FILTERS_RETURNABLE_ONLY(store, payload) {
      store.filter.returnableOnly = payload
    },
    RESET_FILTERS(store, payload) {
      store.filter = payload
    }
  },
  actions: {
    init({commit}) {
      let airlines = [];
      let airlinesFilter = {}
      for (let argument in data.airlines) {
        airlines.push({[argument]: data.airlines[argument]})
        airlinesFilter[argument] = true
      }
      commit('SET_AIRLINES_IN_ARRAY', airlines)
      commit('CHANGE_FILTERS_AIRLINES', airlinesFilter)
      setTimeout(() => {
        commit('SET_FLIGHTS', data.flights)
      }, 3000) // fake delay
    },
    resetFilterAirlines({commit}) {
      let form = {
        airlines: {},
        directOnly: false,
        luggageOnly: false,
        returnableOnly: false
      }
      for (let argument in data.airlines) {
        form.airlines[argument] = true
      }
      commit('RESET_FILTERS', form)
    }
  },
  getters: {
    filteredFlights: (state) => {
      let filter = state.filter;
      return state.flights
        .filter(f => filter.airlines[f.validating_carrier])
        .filter(f => filter.directOnly ? f.itineraries[0][0].stops === 0 : f)
        .filter(f => filter.returnableOnly ? f.refundable : f)
        .filter(f => filter.luggageOnly ? f.services['1PC'] || f.services['20KG'] : f)
    },
    loading: (state => {
      return state.flights && state.flights.length
    })
  }
})
