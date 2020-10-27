<template>
  <v-row class="tickets">
    <v-col class="pa-0 pb-3" cols="12" v-for="(item, index) in tickets" :key="`ticket-${index}`">
      <TicketsItem />
    </v-col>
  </v-row>
</template>

<script>
import TicketsItem from "@/components/Tickets/item";
export default {
name: "Tickets",
  components: {TicketsItem},
  props: ["tickets"]
}
</script>

<style scoped>

</style>