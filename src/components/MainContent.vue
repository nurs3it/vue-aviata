<template>
  <section class="main-content content">
    <v-row no-gutters>
      <v-col class="main-content__filters" cols="3">
        <Filters/>
      </v-col>
      <v-col class="main-content__tickets">
        <Tickets />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Tickets from "@/components/Tickets/Index";
import Filters from "@/components/Filters/Index";

export default {
  name: "MainContent",
  components: {Filters, Tickets}
}
</script>
