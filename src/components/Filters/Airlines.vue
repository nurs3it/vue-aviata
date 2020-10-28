<template>
  <v-card class="card-background-color">
    <v-row class="pa-3">
      <v-col cols="12"><h3>Авиакомпании</h3></v-col>
      <v-col cols="12" class="airlines-list">
        <v-checkbox v-model="KC" class="ma-0 pa-0" color="accent" :label="airlines.KC"/>
        <v-checkbox v-model="HY" class="ma-0 pa-0" color="accent" :label="airlines.HY"/>
        <v-checkbox v-model="EK" class="ma-0 pa-0" color="accent" :label="airlines.EK"/>
        <v-checkbox v-model="HR" class="ma-0 pa-0" color="accent" :label="airlines.HR"/>
        <v-checkbox v-model="FZ" class="ma-0 pa-0" color="accent" :label="airlines.FZ"/>
        <v-checkbox v-model="S7" class="ma-0 pa-0" color="accent" :label="airlines.S7"/>
        <v-checkbox v-model="LH" class="ma-0 pa-0" color="accent" :label="airlines.LH"/>
        <v-checkbox v-model="BT" class="ma-0 pa-0" color="accent" :label="airlines.BT"/>
        <v-checkbox v-model="CZ" class="ma-0 pa-0" color="accent" :label="airlines.CZ"/>
        <v-checkbox v-model="SU" class="ma-0 pa-0" color="accent" :label="airlines.SU"/>
        <v-checkbox v-model="B2" class="ma-0 pa-0" color="accent" :label="airlines.B2"/>
        <v-checkbox v-model="DV" class="ma-0 pa-0" color="accent" :label="airlines.DV"/>
        <v-checkbox v-model="TK" class="ma-0 pa-0" color="accent" :label="airlines.TK"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
  name: "Airlines",
  computed: {
    ...mapState(["airlines", "filter"]),
    KC: {
      get() {
        return this.$store.state.filter.airlines.KC
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "KC"})
      }
    },
    HY: {
      get() {
        return this.$store.state.filter.airlines.HY
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "HY"})
      }
    },
    EK: {
      get() {
        return this.$store.state.filter.airlines.EK
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "EK"})
      }
    },
    HR: {
      get() {
        return this.$store.state.filter.airlines.HR
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "HR"})
      }
    },
    FZ: {
      get() {
        return this.$store.state.filter.airlines.FZ
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "FZ"})
      }
    },
    S7: {
      get() {
        return this.$store.state.filter.airlines.S7
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "S7"})
      }
    },
    LH: {
      get() {
        return this.$store.state.filter.airlines.LH
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "LH"})
      }
    },
    BT: {
      get() {
        return this.$store.state.filter.airlines.BT
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "BT"})
      }
    },
    CZ: {
      get() {
        return this.$store.state.filter.airlines.CZ
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "CZ"})
      }
    },
    SU: {
      get() {
        return this.$store.state.filter.airlines.SU
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "SU"})
      }
    },
    B2: {
      get() {
        return this.$store.state.filter.airlines.B2
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "B2"})
      }
    },
    DV: {
      get() {
        return this.$store.state.filter.airlines.DV
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "DV"})
      }
    },
    TK: {
      get() {
        return this.$store.state.filter.airlines.TK
      }, set(value) {
        this.$store.commit('CHANGE_FILTERS_AIRLINES_KEY', {value: value, key: "TK"})
      }
    }
  },
  methods: {
    ...mapMutations(["CHANGE_FILTERS_AIRLINES", "CHANGE_FILTERS_AIRLINES_KEY"])
  }
}
</script>
