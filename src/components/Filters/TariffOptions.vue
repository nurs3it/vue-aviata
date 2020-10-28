<template>
  <v-card class="card-background-color">
    <v-row class="pa-3">
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <h3>Опции тарифа</h3>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs"
                  v-on="on"
                  @click="resetAll"
                  class="reset-btn">
              <img src="../../assets/icons/reset.svg" alt="reset">
            </span>
          </template>
          <span>Сбросить выбор</span>
        </v-tooltip>
      </v-col>
      <v-col cols="12">
        <v-checkbox v-model="directOnly" class="ma-0 pa-0" color="accent" label="Только прямые"/>
        <v-checkbox v-model="luggageOnly" class="ma-0 pa-0" color="accent" label="Только c багажом"/>
        <v-checkbox v-model="returnableOnly" class="ma-0 pa-0" color="accent" label="Только возвратные"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TariffOptions",
  computed: {
    directOnly: {
      get() {
        return this.$store.state.filter.directOnly
      },
      set(value) {
        this.$store.commit('CHANGE_FILTERS_DIRECT_ONLY', value)
      }
    },
    luggageOnly: {
      get() {
        return this.$store.state.filter.luggageOnly
      },
      set(value) {
        this.$store.commit('CHANGE_FILTERS_LUGGAGE_ONLY', value)
      }
    },
    returnableOnly: {
      get() {
        return this.$store.state.filter.returnableOnly
      },
      set(value) {
        this.$store.commit('CHANGE_FILTERS_RETURNABLE_ONLY', value)
      }
    }
  },
  methods: {
    ...mapMutations(["CHANGE_FILTERS_DIRECT_ONLY", "CHANGE_FILTERS_RETURNABLE_ONLY", "CHANGE_FILTERS_LUGGAGE_ONLY"]),
    resetAll() {
      this.CHANGE_FILTERS_DIRECT_ONLY(false);
      this.CHANGE_FILTERS_RETURNABLE_ONLY(false);
      this.CHANGE_FILTERS_LUGGAGE_ONLY(false);
    }
  },
}
</script>

<style scoped>
.reset-btn {
  cursor: pointer;
}
</style>
