<template>
  <div class="d-flex align-center">
    <img width="40"
         height="40"
         :src="`https://aviata.kz/static/airline-logos/80x80/${ticket.validating_carrier}.png`"
         :alt="`${ticket.validating_carrier}icon`"
    >
    <h5 class="ml-2">{{ airlines[ticket.validating_carrier] }}</h5>
  </div>
</template>

<script>
import {TicketMxn} from "@/mixins/TicketMxn";

export default {
  name: "LogoAirline",
  mixins: [TicketMxn]
}
</script>

<style scoped>

</style>
