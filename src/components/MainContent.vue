<template>
  <section class="main-content">
    <v-row no-gutters>
      <v-col class="main-content__filters" cols="3"></v-col>
      <v-col class="main-content__tickets" cols="9">
        <Tickets :tickets="tickets"/>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Tickets from "@/components/Tickets/index";

export default {
  name: "MainContent",
  components: {Tickets},
  data() {
    return {
      tickets: [1, 2, 3, 5]
    }
  },
}
</script>

<style scoped lang="scss">
.main-content {
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;

  &__filters {
  }

  &__tickets {
  }
}
</style>