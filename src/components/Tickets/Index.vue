<template>
  <v-row class="tickets">
    <template v-if="!loading">
      <v-scale-transition hide-on-leave group class="width-100">
        <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in 4" :key="`skeleton-${index}`">
          <SkeletonItem/>
        </v-col>
      </v-scale-transition>
    </template>
    <template v-else-if="!filteredFlights.length">
      <v-scale-transition hide-on-leave group class="width-100">
        <v-col class="pa-0 pb-0" cols="12">
          <h3>Нет данных</h3>
        </v-col>
      </v-scale-transition>
    </template>
    <template v-else>
      <v-scale-transition hide-on-leave group class="width-100">
        <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in filteredFlights" :key="`ticket-${index}`">
          <TicketsItem :ticket="item"/>
        </v-col>
      </v-scale-transition>
    </template>
    <v-fab-transition>
      <v-btn
          class="d-flex d-md-none"
          color="accent"
          dark
          fixed
          bottom
          right
          fab
          @click="dialog = true"
      >
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="dialog" scrollable max-width="500px">
      <Filters/>
    </v-dialog>
  </v-row>
</template>

<script>
import TicketsItem from "@/components/Tickets/Item/Item";
import {mapGetters} from "vuex";
import SkeletonItem from "@/components/Tickets/SkeletonItem";
import Filters from "@/components/Filters/Index";

export default {
  name: "Tickets",
  components: {Filters, SkeletonItem, TicketsItem},
  computed: {
    ...mapGetters(['filteredFlights', 'loading'])
  },
  inject: ['theme'],
  data() {
    return {
      dialog: false
    }
  },
}
</script>

<style scoped>
.tickets {
  width: 100%;
  position: relative;
}
</style>
