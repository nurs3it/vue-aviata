<template>
  <div class="d-flex align-center">
    <a color="secondary"
       class="text-decoration-none dashed-link"
    >Детали перетела</a>
    <a color="secondary"
       class="text-decoration-none ml-5 dashed-link"
    >Условия тарифа</a>
    <span class="ma-0 ml-5 text--secondary d-flex align-center"
          v-if="!ticket.refundable"
    >
      <img width="20" height="20" src="../../../assets/icons/irrevocable.png" alt="невозвартный">
      <span>невозвратный</span>
    </span>
  </div>
</template>

<script>
import {TicketMxn} from "@/mixins/TicketMxn";

export default {
  name: "LinksActions",
  mixins: [TicketMxn]
}
</script>
