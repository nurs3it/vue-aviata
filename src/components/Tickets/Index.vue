<template>
  <v-row class="tickets">
    <template v-if="!flights.length">
      <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in 3" :key="`skeleton-${index}`">
        <v-skeleton-loader
            ref="skeleton"
            transition="scale-transition"
            :tile="false"
            class="mx-auto"
            max-width="100%"
            type="card"
        ></v-skeleton-loader>
      </v-col>
    </template>
    <template v-else>
      <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in flights" :key="`ticket-${index}`">
        <TicketsItem :ticket="item"/>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import TicketsItem from "@/components/Tickets/Item";
import {mapState} from "vuex";

export default {
  name: "Tickets",
  components: {TicketsItem},
  props: ["tickets"],
  computed: {
    ...mapState(['flights'])
  },
  inject: ['theme'],
}
</script>

<style scoped>

</style>
