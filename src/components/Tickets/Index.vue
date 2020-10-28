<template>
  <v-row class="tickets">
    <template v-if="!loading">
      <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in 4" :key="`skeleton-${index}`">
        <SkeletonItem/>
      </v-col>
    </template>
    <template v-else-if="!filteredFlights.length">
      <v-col class="pa-0 pb-0" cols="12">
        <h3>Нет данных</h3>
      </v-col>
    </template>
    <template v-else>
      <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in filteredFlights" :key="`ticket-${index}`">
        <TicketsItem :ticket="item"/>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import TicketsItem from "@/components/Tickets/Item";
import {mapGetters} from "vuex";
import SkeletonItem from "@/components/Tickets/SkeletonItem";

export default {
  name: "Tickets",
  components: {SkeletonItem, TicketsItem},
  computed: {
    ...mapGetters(['filteredFlights', 'loading'])
  },
  inject: ['theme'],
}
</script>

<style scoped>
.tickets {
  width: 100%;
}
</style>
