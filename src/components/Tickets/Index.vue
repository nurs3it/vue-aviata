<template>
  <v-row class="tickets">
    <template v-if="!filteredFlights.length">
      <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in 5" :key="`skeleton-${index}`">
        <SkeletonItem/>
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
  props: ["tickets"],
  computed: {
    ...mapGetters(['filteredFlights'])
  },
  inject: ['theme'],
}
</script>

<style scoped>

</style>
